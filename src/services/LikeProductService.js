import { axiosPrivate } from '../api/axios';

const DELIVERY_URL = process.env.REACT_APP_API_GATEWAY + '/api/v1/like-product-service/users';
class LikeProductService {
    likeProduct(userId, productId) {
        return axiosPrivate.post(
            DELIVERY_URL + '/follow-product?userId=' + userId + '&productId=' + productId,
        );
    }
    unLikeProduct(userId, productId) {
        return axiosPrivate.put(
            DELIVERY_URL + '/unfollow-product?userId=' + userId + '&productId=' + productId,
        );
    }
    getProductLikebyUser(userId) {
        return axiosPrivate.get(DELIVERY_URL + '/follow-product?userId=' + userId);
    }
}
export default new LikeProductService();
