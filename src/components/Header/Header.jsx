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

export function Header() {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h1 className="main-logo">WineBunker</h1>
            <RegistrationButton/>
            <LoginButton/>
        </div>
    )
}

