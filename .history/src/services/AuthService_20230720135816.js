import axios from 'axios';

// http://localhost:9099/api/v1/identity-service/auth
const API_GATEWAY = 'http://localhost:9099';
const AUTH_URL = API_GATEWAY + process.env.REACT_APP_BASE_URL_INDENTITY_SERVICE + '/auth';
const LOGIN_URL = API_GATEWAY + AUTH_URL + '/authenticate';
const REGISTER_URL = API_GATEWAY + AUTH_URL + '/register';
const REGISTER_CONFIRM_URL = API_GATEWAY + AUTH_URL + '/register-confirm';
const LOGOUT_URL = API_GATEWAY + AUTH_URL + '/logout';

class AuthService {
    login(user) {
        return axios.post(LOGIN_URL, user);
    }
    register(email) {
        return axios.post(REGISTER_URL + '?email=' + email);
    }
    registerConfirm(user, code) {
        return axios.post(REGISTER_CONFIRM_URL + '/' + code, user);
    }
    logout(token) {
        return axios.post(LOGOUT_URL, token);
    }
}

export default new AuthService();
