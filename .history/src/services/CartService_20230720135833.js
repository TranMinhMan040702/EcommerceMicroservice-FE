import { axiosPrivate } from '../api/axios';

const API_GATEWAY = 'http://localhost:9099';
const CART_API_URL = API_GATEWAY + process.env.REACT_APP_BASE_URL_CART_SERVICE + '/cart';

class CartService {
    getCart(userId) {
        return axiosPrivate.get(CART_API_URL + '/user/' + userId);
    }
    addToCart(data) {
        return axiosPrivate.post(CART_API_URL, data);
    }
    deleteOne(cartItemId) {
        return axiosPrivate.put(CART_API_URL + '/deleteOne?cartItemId=' + cartItemId);
    }
    deleteAll(cartItemId) {
        return axiosPrivate.delete(CART_API_URL + '/deleteAll?cartItemId=' + cartItemId);
    }
    clearedCart(cartId) {
        return axiosPrivate.put(CART_API_URL + '/' + cartId);
    }
}

export default new CartService();
