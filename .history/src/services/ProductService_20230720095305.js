import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';
// http://localhost:9099/api/v1/product-service/product/public
const PRODUCT_API_URL_PUBLIC = process.env.REACT_APP_BASE_URL_PRODUCT_SERVICE + '/product/public';

// http://localhost:9099/api/v1/product-service//product/admin/product
const PRODUCT_API_URL_ADMIN =
    process.env.REACT_APP_BASE_URL_PRODUCT_SERVICE + '/product/admin/products';

class ProductService {
    getProducts(requestParams) {
        return axios.get(PRODUCT_API_URL_PUBLIC + '/?' + requestParams);
    }
    getProductById(id) {
        return axios.get(PRODUCT_API_URL_PUBLIC + '?id=' + id);
    }
    addProduct(product) {
        return axiosPrivate.post(PRODUCT_API_URL_ADMIN, product);
    }
    updateProduct(product, id) {
        return axiosPrivate.post(PRODUCT_API_URL_ADMIN + '/' + id, product);
    }
    deleteProduct(id) {
        return axiosPrivate.delete(PRODUCT_API_URL_ADMIN + '/' + id);
    }
}

export default new ProductService();
