import axios from "axios";
import {Auth_Login_Success} from "./types";

export const login = async (loginData) => {
    let request = {
        type: Auth_Login_Success,
        loginSuccess: false,
        accessToken: null,
        expires : null
    }
    try {
        const response= await axios.post("/auth/login",{
            id: loginData.username,
            password: loginData.password,
        });
        console.log(response);
        if (response.status === 201) {
            request.loginSuccess = true;
            request.accessToken = response.data.accessToken;
            request.expires = new Date().getTime() + 60 * 1000 * 1000;
            window.localStorage.setItem("key", JSON.stringify(request));
        } else {
            request.loginSuccess = false;
        }

    } catch (e) {
        console.log(e)
    }

    return request;
};

export const logout = () => {
    let request = {
        type: Auth_Login_Success,
        loginSuccess: false,
        accessToken: null,
        expires: null,
    }
    window.localStorage.setItem('key', JSON.stringify(request));

    return request;
};