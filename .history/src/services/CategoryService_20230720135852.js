import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';

// http://localhost:9099/api/v1/product-service
const API_GATEWAY = 'http://localhost:9099';
const PRODUCT_URL_PRODUCT_SERVICE = API_GATEWAY + process.env.REACT_APP_BASE_URL_PRODUCT_SERVICE;
const CATEGORY_API_URL_PUBLIC = API_GATEWAY + PRODUCT_URL_PRODUCT_SERVICE + '/public/categorise';
const CATEGORY_API_URL_ADMIN = API_GATEWAY + PRODUCT_URL_PRODUCT_SERVICE + '/admin/categorise';

class CategoryService {
    getAllCategories() {
        return axios.get(CATEGORY_API_URL_PUBLIC);
    }
    addCategory(category) {
        return axiosPrivate.post(CATEGORY_API_URL_ADMIN, category);
    }
    updateCategory(category) {
        return axiosPrivate.put(CATEGORY_API_URL_ADMIN + category.id, category);
    }
    deletedPermanentlyCategory(listIds) {
        return axiosPrivate.delete(CATEGORY_API_URL_ADMIN + listIds);
    }
}

export default new CategoryService();
