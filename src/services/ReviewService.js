import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';

const REVIEW_URL = process.env.REACT_APP_API_GATEWAY + '/api/v1/review-service/review';
class ReviewService {
    postReview(review) {
        return axiosPrivate.post(REVIEW_URL, review);
    }
    getAllReviewByProduct(productId) {
        return axios.get(REVIEW_URL + '/public/product/' + productId);
    }
}
export default new ReviewService();
