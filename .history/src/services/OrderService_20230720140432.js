import { axiosPrivate } from '../api/axios';

// http://localhost:9099/api/v1/order-service
const API_GATEWAY = process.env.REACT_APP_URL_API_GATEWAY;
const ORDER_URL_ORDER_SERVICE = API_GATEWAY + process.env.REACT_APP_BASE_URL_ORDER_SERVICE;
const ORDER_API_URL = ORDER_URL_ORDER_SERVICE + '/order';
const ORDER_API_URL_ADMIN = ORDER_URL_ORDER_SERVICE + '/order/admin/orders';

class Order {
    createOrder(order) {
        return axiosPrivate.post(ORDER_API_URL, order);
    }
    getByUserAndStatus(userId, status) {
        return axiosPrivate.get(ORDER_API_URL + '/user?userId=' + userId + '&status=' + status);
    }
    getOrdersAllByUser(userId) {
        return axiosPrivate.get(ORDER_API_URL + '/user/' + userId);
    }
    getOrderById(orderId) {
        return axiosPrivate.get(ORDER_API_URL + '/' + orderId);
    }
    updateStatus(orderId, status) {
        return axiosPrivate.put(ORDER_API_URL + '?orderId=' + orderId + '&status=' + status);
    }
    getAllOrders(requestParams) {
        return axiosPrivate.get(ORDER_API_URL_ADMIN + '?' + requestParams);
    }
}

export default new Order();
