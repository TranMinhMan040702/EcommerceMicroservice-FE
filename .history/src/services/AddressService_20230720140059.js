import { axiosPrivate } from '../api/axios';

// http://localhost:9099/api/v1/identity-service/users/addresses
const API_GATEWAY = process.env.REACT_APP_URL_API_GATEWAY;
const REACT_APP_ADDRESS_API_URL =
    API_GATEWAY + process.env.REACT_APP_BASE_URL_INDENTITY_SERVICE + '/users/addresses';

class AddressService {
    getAddressesByUserId(userId) {
        return axiosPrivate.get(REACT_APP_ADDRESS_API_URL + '/' + userId);
    }
    uploadAddress(address) {
        return axiosPrivate.post(REACT_APP_ADDRESS_API_URL, address);
    }
    deleteAddressById(id) {
        return axiosPrivate.put(REACT_APP_ADDRESS_API_URL + '/' + id);
    }
}

export default new AddressService();
