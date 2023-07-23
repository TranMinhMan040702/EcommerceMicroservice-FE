import axios from 'axios';

const AUTH_URL = process.env.REACT_APP_API_GATEWAY + '/api/v1/identity-service/auth';
class AuthService {
    login(user) {
        return axios.post(AUTH_URL + '/authenticate', user);
    }
    register(email) {
        return axios.post(AUTH_URL + '/register?email=' + email);
    }
    registerConfirm(user, code) {
        return axios.post(AUTH_URL + '/register-confirm/' + code, user);
    }
    logout(token) {
        return axios.post(AUTH_URL + '/logout', token);
    }
}

export default new AuthService();
