import { axiosPrivate } from '../api/axios';

const DELIVERY_URL = process.env.REACT_APP_API_GATEWAY + '/api/v1/order-service';
class Delivery {
    getDelivery() {
        return axiosPrivate.get(DELIVERY_URL + '/public/deliveries');
    }
    addDelivery(delivery) {
        return axiosPrivate.post(DELIVERY_URL + '/admin/deliveries', delivery);
    }
    updateDelivery(delivery) {
        return axiosPrivate.put(DELIVERY_URL + '/admin/deliveries', delivery);
    }

    // Error
    deletedPermanentlyDelivery(listIds) {
        return axiosPrivate.delete(DELIVERY_URL + '/admin/delete/deliveries');
    }
}

export default new Delivery();
