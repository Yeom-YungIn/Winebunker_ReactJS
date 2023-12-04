import React, {useState} from 'react';
import {SearchList} from "../components/List/SearchList";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {SearchBar} from "../components/SearchBar";
export default function MainModule() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (newValue) => {
        setSearchValue(newValue);
    };

    return (
        <div>
            <Header/>
            <SearchBar onSearchChange={handleSearchChange}/>
            <SearchList searchValue={searchValue}/>
            <Footer/>
        </div>
    );
}