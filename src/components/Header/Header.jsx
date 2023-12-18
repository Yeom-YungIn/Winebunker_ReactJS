import React from 'react';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/auth/action";




export function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const RegistrationButton = () => {
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
        const myPageButtonClick = () => {
            navigate('/myPage');
        }

        return (
            <Button className="login-button" onClick={myPageButtonClick}>
                마이페이지
            </Button>
        )
    }

    const Logout = () => {
        const LogoutButton = () => {
            dispatch(logout());
            window.location.reload();
        }

        return (
            <Button className="login-button" onClick={LogoutButton}>
                로그아웃
            </Button>
        )
    }


    const checkToken = () => {
        const key = JSON.parse(window.localStorage.getItem('key'))
        const accessToken = key.accessToken
        const expires = key.expires;
        if (accessToken && new Date() < expires) {
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
                <Logout />
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

