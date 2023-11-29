import React from 'react';
import {SearchList} from "../views/List/SearchList";
import {Header} from "../views/Common/Header/Header";
import {Footer} from "../views/Common/Footer/Footer";
export function Main(props) {
    return (
        <div >
            <Header/>
            <SearchList/>
            <Footer/>
        </div>
    )
}