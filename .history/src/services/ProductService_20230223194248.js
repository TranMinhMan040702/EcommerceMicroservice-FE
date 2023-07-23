import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';

const PRODUCT_API_URL = process.env.REACT_APP_PRODUCT_API_URL;
const REACT_APP_PRODUCT_ADMIN_API_URL = process.env.REACT_APP_PRODUCT_ADMIN_API_URL;
const PRODUCT_API_GET_ONE_URL = process.env.REACT_APP_PRODUCT_API_GET_ONE_URL;
class ProductService {
    getProducts() {
        return axiosPrivate.get(PRODUCT_API_URL);
    }
    getProductById(id) {
        return axiosPrivate.get(PRODUCT_API_GET_ONE_URL + '?id=' + id);
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
