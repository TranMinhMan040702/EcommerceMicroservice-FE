import { axiosPrivate } from '../api/axios';

// http://localhost:9099/api/v1/order-service
const API_GATEWAY = 'http://localhost:9099';
const ORDER_URL_ORDER_SERVICE = API_GATEWAY + process.env.REACT_APP_BASE_URL_ORDER_SERVICE;
const DELIVERY_API_URL_PUBLIC = API_GATEWAY + ORDER_URL_ORDER_SERVICE + '/public/deliveries';
const DELIVERY_API_URL_ADMIN = API_GATEWAY + ORDER_URL_ORDER_SERVICE + '/admin/deliveries';

class Delivery {
    getDelivery() {
        return axiosPrivate.get(DELIVERY_API_URL_PUBLIC);
    }
    addDelivery(delivery) {
        return axiosPrivate.post(DELIVERY_API_URL_ADMIN, delivery);
    }
    updateDelivery(delivery) {
        return axiosPrivate.put(DELIVERY_API_URL_ADMIN + delivery.id, delivery);
    }
    deletedPermanentlyDelivery(listIds) {
        return axiosPrivate.delete(DELIVERY_API_URL_ADMIN + listIds);
    }
}

export default new Delivery();
