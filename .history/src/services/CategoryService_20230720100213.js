import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';

const PRODUCT_URL_PRODUCT_SERVICE = process.env.REACT_APP_BASE_URL_PRODUCT_SERVICE;
const CATEGORY_API_URL_PUBLIC = PRODUCT_URL_PRODUCT_SERVICE + '/public/categorise';
const CATEGORY_API_URL_ADMIN = PRODUCT_URL_PRODUCT_SERVICE + '/admin/categorise';

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
