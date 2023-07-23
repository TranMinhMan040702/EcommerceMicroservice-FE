import { axiosPrivate } from '../api/axios';

const ADDRESS_URL = process.env.REACT_APP_API_GATEWAY + '/api/v1/identity-service/user/addresses/';
class AddressService {
    getAddressesByUserId(userId) {
        return axiosPrivate.get(ADDRESS_URL + userId);
    }
    uploadAddress(address) {
        return axiosPrivate.post(ADDRESS_URL, address);
    }
    deleteAddressById(id) {
        return axiosPrivate.put(ADDRESS_URL + id);
    }
}

export default new AddressService();
