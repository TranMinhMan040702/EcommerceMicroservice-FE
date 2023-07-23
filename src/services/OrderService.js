import { axiosPrivate } from '../api/axios';

const ORDER_URL = process.env.REACT_APP_API_GATEWAY + '/api/v1/order-service/order';
class Order {
    createOrder(order) {
        return axiosPrivate.post(ORDER_URL, order);
    }
    getByUserAndStatus(userId, status) {
        return axiosPrivate.get(ORDER_URL + '/user?userId=' + userId + '&status=' + status);
    }
    getOrdersAllByUser(userId) {
        return axiosPrivate.get(ORDER_URL + '/user/' + userId);
    }
    getOrderById(orderId) {
        return axiosPrivate.get(ORDER_URL + '/' + orderId);
    }
    updateStatus(orderId, status) {
        return axiosPrivate.put(ORDER_URL + '?orderId=' + orderId + '&status=' + status);
    }
    getAllOrders(requestParams) {
        return axiosPrivate.get(ORDER_URL + '/admin/orders?' + requestParams);
    }
}

export default new Order();
