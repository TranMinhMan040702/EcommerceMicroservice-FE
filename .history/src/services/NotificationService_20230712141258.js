import { axiosPrivate } from '../api/axios';
const REACT_APP_BASE_URL_NOTIFICATION_SERVICE = process.env.REACT_APP_BASE_URL_NOTIFICATION_SERVICE;

class Notification {
    getAllByRecipientId(recipientId) {
        return axiosPrivate.get(REACT_APP_BASE_URL_NOTIFICATION_SERVICE + '/' + recipientId);
    }

    getAllByRecipientIdTop5(recipientId) {
        return axiosPrivate.get(
            REACT_APP_BASE_URL_NOTIFICATION_SERVICE + '/get-top-5/' + recipientId,
        );
    }

    updateStatus(notificationId) {
        axiosPrivate.post(
            REACT_APP_BASE_URL_NOTIFICATION_SERVICE + '/update-status/' + notificationId,
        );
    }
}

export default new Notification();
