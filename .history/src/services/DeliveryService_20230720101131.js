import { axiosPrivate } from '../api/axios';

// http://localhost:9099/api/v1/order-service
const ORDER_URL_ORDER_SERVICE = process.env.REACT_APP_BASE_URL_ORDER_SERVICE;
const DELIVERY_API_URL_PUBLIC = ORDER_URL_ORDER_SERVICE + '/public/deliveries';
const DELIVERY_API_URL_ADMIN = ORDER_URL_ORDER_SERVICE + '/admin/deliveries';

class Delivery {
    getDelivery() {
        return axiosPrivate.get(REACT_APP_DELIVERY_API_URL + '/get-all');
    }
    addDelivery(delivery) {
        return axiosPrivate.post(REACT_APP_DELIVERY_ADMIN_API_URL, delivery);
    }
    updateDelivery(delivery) {
        return axiosPrivate.put(REACT_APP_DELIVERY_ADMIN_API_URL + delivery.id, delivery);
    }
    deletedPermanentlyDelivery(listIds) {
        return axiosPrivate.delete(REACT_APP_DELIVERY_ADMIN_API_URL + listIds);
    }
}

export default new Delivery();
