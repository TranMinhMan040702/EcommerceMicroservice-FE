import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';
const USER_API_URL = process.env.REACT_APP_BASE_URL_INDENTITY_SERVICE + '/user';
const REACT_APP_USER_ADMIN_API_URL =
    process.env.REACT_APP_BASE_URL_INDENTITY_SERVICE + '/user/admin/users';
const URL_RESETPASSWORD = USER_API_URL + '/reset-password';
const URL_FORGOTPASSWORD = USER_API_URL + '/forgot-password';

class UserService {
    getUsers(requestParams) {
        return axiosPrivate.get(REACT_APP_USER_ADMIN_API_URL + '?' + requestParams);
    }
    getUserById(id) {
        return axiosPrivate.get(USER_API_URL + '/' + id);
    }
    updateUser(user) {
        return axiosPrivate.post(USER_API_URL, user);
    }
    resetPassword(resetPassword) {
        return axiosPrivate.post(URL_RESETPASSWORD, resetPassword);
    }
    forgotPassword(resetPassword) {
        return axios.post(URL_FORGOTPASSWORD, resetPassword);
    }
}

export default new UserService();
