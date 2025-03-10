import React, { useState } from 'react';
import { Input } from 'antd';

export function SearchBar({ onSearchChange }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onSearchChange(newValue);
  };

  return (
    <div className="div">
      <Input
        onChange={handleInputChange}
        type="search"
        name="searchValue"
        className="centered-searchbar"
        placeholder="검색어를 입력하세요"
        value={searchValue}
      />
    </div>
  );
}
