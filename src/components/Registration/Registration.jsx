import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, Table } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registrationResource, vinSearchList } from '../../redux/crud/action';

export function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [vinSn, setVinSn] = useState('');
  const [date, setDate] = useState(String(Date()));
  const [price, setPrice] = useState('');
  const [vintage, setVintage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [store, setStore] = useState('');
  const [description, setDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedVin, setSelectedVin] = useState(null);

  const colunms = [
    {
      title: '와인명',
      dataIndex: 'vinNameKor',
      key: 'vinNameKor',
    },
    {
      title: '지역',
      dataIndex: 'region',
      key: 'region',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 검색어가 비어 있으면 빈 배열로 초기화
        if (!searchInput.trim()) {
          setSearchResults([]);
          return;
        }

        // 서버에서 데이터를 가져오는 API 호출
        const response = await dispatch(vinSearchList(searchInput));
        setSearchResults(response.payload);
        console.log(searchResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [searchInput]);

  async function onSubmitHandler() {
    const resourceObj = {
      vinSn: vinSn,
      vintage: vintage,
      price: price,
      store: store,
      capacity: capacity,
      description: description,
      purchaseDate: date,
    };
    const key = JSON.parse(window.localStorage.getItem('key'));
    const accessToken = key.accessToken,
      expires = key.expires;
    if (new Date() > expires) {
      alert('로그인 시간이 만료되었습니다.');
      navigate('/');
    }
    try {
      console.log(resourceObj);
      const response = await dispatch(
        registrationResource(resourceObj, accessToken),
      );
      if (response.payload === 201) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleStore = (event) => {
    setStore(event.target.value);
  };
  const handleVintage = (event) => {
    setVintage(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleCapacity = (event) => {
    setCapacity(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (selectedVin) {
      setSearchInput(selectedVin.vinNameKor);
      setVinSn(selectedVin.vinSn);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleRowClick = (record) => {
    setSelectedVin(record);
  };

  return (
    <div className="input">
      <p>구입 날짜</p>
      <Input placeholder="날짜를 입력하세요" onChange={handleDate} />
      <p>와인명</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/*<Input placeholder="와인명"/>*/}
        <Input
          type="text"
          placeholder="와인명"
          value={searchInput}
          disabled={selectedVin !== null}
          onChange={handleInputChange}
        />
        <Button onClick={showModal}>찾기</Button>
        <Modal
          title="와인 검색"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Table
            columns={colunms}
            dataSource={searchResults}
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
            })}
          />
        </Modal>
      </div>
      <p>구입처</p>
      <Input placeholder="구입처" onChange={handleStore} />
      <p>빈티지</p>
      <Input placeholder="빈티지" onChange={handleVintage} />
      <p>가격</p>
      <Input placeholder="가격" onChange={handlePrice} />
      <p>용량</p>
      <Input placeholder="용량" onChange={handleCapacity} />
      <p>기타</p>
      <Input placeholder="기타" onChange={handleDescription} />
      <p />
      <Button type="default" onClick={() => navigate('/')}>
        뒤로
      </Button>
      <Button
        type="primary"
        htmlType="submit"
        onClick={onSubmitHandler}
        className="submit-button"
      >
        등록
      </Button>
    </div>
  );
}
