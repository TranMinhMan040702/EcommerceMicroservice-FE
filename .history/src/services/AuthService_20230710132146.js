import axios from 'axios';
const AUTH_URL =
    process.env.REACT_APP_BASE_URL_INDENTITY_SERVICE + process.env.REACT_APP_AUTH_API_URL;
const LOGIN_URL = AUTH_URL + '/authenticate';
const REGISTER_URL = AUTH_URL + '/register';
const REGISTER_CONFIRM_URL = AUTH_URL + '/register-confirm';
const LOGOUT_URL = AUTH_URL + '/logout';
class AuthService {
    login(user) {
        return axios.post(LOGIN_URL, user);
    }
    register(user) {
        return axios.post(REGISTER_URL, user);
    }
    registerConfirm(code) {
        return axios.post(REGISTER_CONFIRM_URL + '/' + code);
    }
    logout(token) {
        return axios.post(LOGOUT_URL, token);
    }
}

export default new AuthService();
