import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';
const REACT_APP_BASE_URL_PRODUCT_SERVICE = process.env.REACT_APP_BASE_URL_PRODUCT_SERVICE;

const PRODUCT_API_URL_PUBLIC = process.env.REACT_APP_BASE_URL_PRODUCT_SERVICE + '/product/public';

const PRODUCT_API_URL_PRIVATE = process.env.REACT_APP_BASE_URL_PRODUCT_SERVICE + '/product';

const PRODUCT_API_URL_ADMIN =
    process.env.REACT_APP_BASE_URL_PRODUCT_SERVICE + '/product/admin/products';

class ProductService {
    getProducts(requestParams) {
        return axios.get(PRODUCT_API_URL + '/get-all/?' + requestParams);
    }
    getProductById(id) {
        return axios.get(PRODUCT_API_URL_PUBLIC + '?id=' + id);
    }
    addProduct(product) {
        return axiosPrivate.post(PRODUCT_API_URL_ADMIN, product);
    }
    updateProduct(product, id) {
        return axiosPrivate.post(REACT_APP_PRODUCT_ADMIN_API_URL + '/' + id, product);
    }
    deleteProduct(id) {
        return axiosPrivate.delete(REACT_APP_PRODUCT_ADMIN_API_URL + '/' + id);
    }
}

export default new ProductService();