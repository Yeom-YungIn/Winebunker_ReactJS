import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';
import '../../styles/main.css';
import { useDispatch } from 'react-redux';
import { loadList, searchList } from '../../redux/crud/action';
export function SearchList(props) {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [data, setData] = useState([]);
  const searchInput = useRef(null);
  const dispatch = useDispatch();
  const isLogIn = window.localStorage.getItem('isLogIn');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props.searchValue) {
          const response = await dispatch(searchList(props.searchValue));
          setData(response.payload);
        } else {
          const response = await dispatch(loadList());
          setData(response.payload);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, props.searchValue]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: () => <SearchOutlined className="filter-icon" />,
    onFilter: (value, record) =>
      record[`${dataIndex}`].toString().includes(value),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: '와인명',
      dataIndex: 'vinNameKor',
      key: 'vinNameKor',
      width: '30%',
      ...getColumnSearchProps('vinNameKor'),
      render: (text, record) => record.vinNameKor,
    },
    {
      title: '가격',
      dataIndex: 'price',
      key: 'price',
      width: '20%',
    },
    {
      title: '구매처',
      dataIndex: 'store',
      key: 'store',
      width: '30%',
      ...getColumnSearchProps('store'),
    },
    {
      title: '구매일',
      dataIndex: 'purchaseDate',
      key: 'purchaseDate',
      sorter: (a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate),
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return (
    <div className="centered-table">
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(render) => render.id}
      />
    </div>
  );
}
