import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';
const REACT_APP_BASE_URL_PRODUCT_SERVICE = process.env.REACT_APP_BASE_URL_PRODUCT_SERVICE;
const PRODUCT_API_URL = REACT_APP_BASE_URL_PRODUCT_SERVICE + process.env.REACT_APP_PRODUCT_API_URL;
const REACT_APP_PRODUCT_ADMIN_API_URL =
    REACT_APP_BASE_URL_PRODUCT_SERVICE + process.env.REACT_APP_PRODUCT_ADMIN_API_URL;
const PRODUCT_API_GET_ONE_URL =
    REACT_APP_BASE_URL_PRODUCT_SERVICE + process.env.REACT_APP_PRODUCT_API_GETONE_URL;

class ProductService {
    getProducts(requestParams) {
        return axios.get(PRODUCT_API_URL + '?' + requestParams);
    }
    getProductById(id) {
        return axios.get(PRODUCT_API_GET_ONE_URL + '?id=' + id);
    }
    addProduct(product) {
        return axiosPrivate.post(REACT_APP_PRODUCT_ADMIN_API_URL, product);
    }
    updateProduct(product, id) {
        return axiosPrivate.post(REACT_APP_PRODUCT_ADMIN_API_URL + '/' + id, product);
    }
    deleteProduct(id) {
        return axiosPrivate.delete(REACT_APP_PRODUCT_ADMIN_API_URL + '/' + id);
    }
}

export default new ProductService();
