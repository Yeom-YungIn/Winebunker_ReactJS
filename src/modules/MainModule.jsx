import React, { useState } from 'react';
import { SearchList } from '../components/List/SearchList';
import { Main } from '../components/Header/Main';
import { Footer } from '../components/Footer/Footer';
import { SearchBar } from '../components/Searchbar/SearchBar';
import { Header } from '../components/Header/Header';
export default function MainModule() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (newValue) => {
    setSearchValue(newValue);
  };

  return (
    <>
      <Header />
      <Main />
      <SearchBar onSearchChange={handleSearchChange} />
      <SearchList searchValue={searchValue} />
      <Footer />
    </>
  );
}
