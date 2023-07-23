import { axiosPrivate } from '../api/axios';

const CART_URL = process.env.REACT_APP_API_GATEWAY + '/api/v1/cart-service/cart';
class CartService {
    getCart(userId) {
        return axiosPrivate.get(CART_URL + '/user/' + userId);
    }
    addToCart(data) {
        return axiosPrivate.post(CART_URL, data);
    }
    deleteOne(cartItemId) {
        return axiosPrivate.put(CART_URL + '/deleteOne?cartItemId=' + cartItemId);
    }
    deleteAll(cartItemId) {
        return axiosPrivate.delete(CART_URL + '/deleteAll?cartItemId=' + cartItemId);
    }
    clearedCart(cartId) {
        return axiosPrivate.put(CART_URL + '/clear-cart/' + cartId);
    }
}

export default new CartService();
