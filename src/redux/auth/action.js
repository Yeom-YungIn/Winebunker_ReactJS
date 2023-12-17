import axios from "axios";
import {Auth_Login_Success} from "./types";

export const login = async (loginData) => {
    let request = {
        type: Auth_Login_Success,
        loginSuccess: false,
        accessToken: null,
    }
    console.log(loginData)
    try {
        const response= await axios.post("/auth/login",{
            id: loginData.username,
            password: loginData.password,
        });
        console.log(response);
        if (response.status === 201) {
            request.loginSuccess = true;
            request.accessToken = response.data.accessToken;
            window.localStorage.setItem("key", response.data.accessToken);
        } else {
            request.loginSuccess = false;
        }

    } catch (e) {
        console.log(e)
    }

    return request;
};