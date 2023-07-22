import { axiosPrivate } from '../api/axios';

const ORDER_URL_ORDER_SERVICE = process.env.REACT_APP_BASE_URL_ORDER_SERVICE;
const ORDER_API_URL = ORDER_URL_ORDER_SERVICE + '/order';
const ORDER_API_URL_ADMIN = ORDER_URL_ORDER_SERVICE + '/order/admin/orders';

class Order {
    createOrder(order) {
        return axiosPrivate.post(REACT_APP_ORDER_API_URL, order);
    }
    getByUserAndStatus(userId, status) {
        return axiosPrivate.get(
            REACT_APP_ORDER_API_URL + '/user?userId=' + userId + '&status=' + status,
        );
    }
    getOrdersAllByUser(userId) {
        return axiosPrivate.get(REACT_APP_ORDER_API_URL + '/user/' + userId);
    }
    getOrderById(orderId) {
        return axiosPrivate.get(REACT_APP_ORDER_API_URL + '/' + orderId);
    }
    updateStatus(orderId, status) {
        return axiosPrivate.put(
            REACT_APP_ORDER_API_URL + '?orderId=' + orderId + '&status=' + status,
        );
    }
    getAllOrders(requestParams) {
        return axiosPrivate.get(REACT_APP_ORDER_ADMIN_API_URL + '?' + requestParams);
    }
}

export default new Order();
