import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';

const CATEGORY_URL = process.env.REACT_APP_API_GATEWAY + '/api/v1/product-service';
class CategoryService {
    getAllCategories() {
        return axios.get(CATEGORY_URL + '/public/categorise');
    }
    addCategory(category) {
        return axiosPrivate.post(CATEGORY_URL + '/admin/categorise', category);
    }
    updateCategory(category) {
        return axiosPrivate.put(CATEGORY_URL + '/admin/categorise', category);
    }

    // Rereview here because it has error
    deletedPermanentlyCategory(listIds) {
        return axiosPrivate.delete(CATEGORY_URL + '/admin/categorise/' + listIds);
    }
}

export default new CategoryService();
