import { axiosPrivate } from '../api/axios';

const USER_URL = process.env.REACT_APP_API_GATEWAY + '/api/v1/identity-service/user';
class UserService {
    getUsers(requestParams) {
        return axiosPrivate.get(USER_URL + '/admin/users?' + requestParams);
    }
    getUserById(id) {
        return axiosPrivate.get(USER_URL + '/' + id);
    }
    updateUser(user) {
        return axiosPrivate.post(USER_URL, user);
    }
    // resetPassword(resetPassword) {
    //     return axiosPrivate.post(URL_RESETPASSWORD, resetPassword);
    // }
    // forgotPassword(resetPassword) {
    //     return axios.post(URL_FORGOTPASSWORD, resetPassword);
    // }
}

export default new UserService();
