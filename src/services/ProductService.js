import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';

const PRODUCT_URL = process.env.REACT_APP_API_GATEWAY + '/api/v1/product-service/product';
class ProductService {
    getProducts(requestParams) {
        return axios.get(PRODUCT_URL + '/public/products?' + requestParams);
    }
    getProductById(id) {
        return axios.get(PRODUCT_URL + '/public?id=' + id);
    }
    addProduct(product) {
        return axiosPrivate.post(PRODUCT_URL + '/admin/products', product);
    }
    updateProduct(product, id) {
        return axiosPrivate.post(PRODUCT_URL + '/admin/products/' + id, product);
    }
    deleteProduct(id) {
        return axiosPrivate.delete(PRODUCT_URL + '/admin/products/' + id);
    }
}

export default new ProductService();
