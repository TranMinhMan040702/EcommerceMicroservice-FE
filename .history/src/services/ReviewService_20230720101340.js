import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';

// http://localhost:9099/api/v1/review-service
const REVIEW_API_URL = process.env.REACT_APP_BASE_URL_REVIEW_SERVICE + 'review';

class ReviewService {
    postReview(review) {
        return axiosPrivate.post(REVIEW_API_URL, review);
    }
    getAllReviewByProduct(productId) {
        return axios.get(REVIEW_API_URL + '/product/' + productId);
    }
}
export default new ReviewService();
