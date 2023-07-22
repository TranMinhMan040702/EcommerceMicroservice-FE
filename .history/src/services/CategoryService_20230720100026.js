import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';

const REACT_APP_BASE_URL_PRODUCT_SERVICE = process.env.REACT_APP_BASE_URL_PRODUCT_SERVICE;
const CATEGORY_API_URL_PUBLIC = REACT_APP_BASE_URL_PRODUCT_SERVICE + '/public/categorise';
const REACT_APP_CATEGORY_ADMIN_API_URL =
    REACT_APP_BASE_URL_PRODUCT_SERVICE + process.env.REACT_APP_CATEGORY_ADMIN_API_URL;

class CategoryService {
    getAllCategories() {
        return axios.get(REACT_APP_CATEGORY_API_URL + '/get-all');
    }
    addCategory(category) {
        return axiosPrivate.post(REACT_APP_CATEGORY_ADMIN_API_URL, category);
    }
    updateCategory(category) {
        return axiosPrivate.put(REACT_APP_CATEGORY_ADMIN_API_URL + category.id, category);
    }
    deletedPermanentlyCategory(listIds) {
        return axiosPrivate.delete(REACT_APP_CATEGORY_ADMIN_API_URL + listIds);
    }
}

export default new CategoryService();
