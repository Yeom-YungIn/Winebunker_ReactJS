import axios from 'axios';
import { Auth_Login_Success } from './types';

const JWT_EXPIRY_TIME = 3600 * 1000 * 60;

axios.defaults.withCredentials = true;

export const login = async (loginData) => {
  let request = {
    type: Auth_Login_Success,
    loginSuccess: false,
    accessToken: null,
    expires: null,
  };
  try {
    const response = await axios.post('/auth/login', {
      name: loginData.name,
      password: loginData.password,
    });
    if (response.status === 201) {
      onLoginSuccess(response);
      request.loginSuccess = true;
      request.accessToken = response.data.accessToken;
      request.expires = new Date().getTime() + JWT_EXPIRY_TIME;
      window.localStorage.setItem('isLogIn', 'Y');
      window.localStorage.setItem('expires', request.expires);
    } else {
      request.loginSuccess = false;
    }
  } catch (e) {
    console.log(e);
  }

  return request;
};

export const logout = () => {
  let request = {
    type: Auth_Login_Success,
    loginSuccess: false,
    accessToken: null,
    expires: null,
  };
  window.localStorage.removeItem('isLogIn');
  window.localStorage.removeItem('expires');

  return request;
};

const onSilentRefresh = () => {
  axios
    .post('/refresh')
    .then(onLoginSuccess)
    .catch((error) => {});
};

const onLoginSuccess = (response) => {
  const { accessToken } = response.data;
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
};
