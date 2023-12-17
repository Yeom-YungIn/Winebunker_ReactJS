import React from 'react';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";


const RegistrationButton = () => {
    const navigate = useNavigate();
    const registrationButtonClick = () => {
        navigate('/registration');
    }
    return (
        <Button className="registration-button" onClick={registrationButtonClick}>
            등록
        </Button>
    )
}

const LoginButton = () => {
    const navigate = useNavigate();
    const loginButtonClick = () => {
        navigate('/login');
    }

    return (
        <Button className="login-button" onClick={loginButtonClick}>
            로그인
        </Button>
    )
}

const MyPageButton = () => {
    const navigate = useNavigate();
    const myPageButtonClick = () => {
        navigate('/myPage');
    }

    return (
        <Button className="login-button" onClick={myPageButtonClick}>
            마이페이지
        </Button>
    )
}

export function Header() {
    const checkToken = () => {
        const accessToken = localStorage.getItem('key');
        if (accessToken) {
            return true;
        } else {
            return false;
        }
    }

    if (checkToken()) {
        return (
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h1 className="main-logo">WineBunker</h1>
                <RegistrationButton/>
                <MyPageButton />
            </div>
        );
    } else {
        return (
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h1 className="main-logo">WineBunker</h1>
                <LoginButton/>
            </div>
        );
    }


}

