import { axiosPrivate } from '../api/axios';

// http://localhost:9099/api/v1/like-product-service/users
const API_GATEWAY = 'http://localhost:9099';
const REACT_APP_BASE_URL_LIKE_PRODUCT_SERVICE =
    API_GATEWAY + process.env.REACT_APP_BASE_URL_LIKE_PRODUCT_SERVICE;

class LikeProductService {
    likeProduct(userId, productId) {
        return axiosPrivate.post(
            REACT_APP_BASE_URL_LIKE_PRODUCT_SERVICE +
                '/follow-product?userId=' +
                userId +
                '&productId=' +
                productId,
        );
    }
    unLikeProduct(userId, productId) {
        return axiosPrivate.put(
            REACT_APP_BASE_URL_LIKE_PRODUCT_SERVICE +
                '/follow-product?userId=' +
                userId +
                '&productId=' +
                productId,
        );
    }
    getProductLikebyUser(userId) {
        return axiosPrivate.get(
            REACT_APP_BASE_URL_LIKE_PRODUCT_SERVICE + '/follow-product?userId=' + userId,
        );
    }
}
export default new LikeProductService();
