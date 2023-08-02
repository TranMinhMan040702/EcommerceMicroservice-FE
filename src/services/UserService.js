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
    resetPassword(resetPassword) {
        return axiosPrivate.post(USER_URL + '/reset-password', resetPassword);
    }
    sendMailForgotPassword(email) {
        return axiosPrivate.post(USER_URL + '/send-mail/forgot-password?email=' + email);
    }
    saveNewPassword(resetPasswordRequest) {
        return axiosPrivate.post(USER_URL + '/save/new-password', resetPasswordRequest);
    }
}

export default new UserService();
