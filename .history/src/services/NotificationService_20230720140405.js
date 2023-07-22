import { axiosPrivate } from '../api/axios';

// http://localhost:9099/api/v1/notification-service/notification
const API_GATEWAY = process.env.REACT_APP_URL_API_GATEWAY;
const REACT_APP_BASE_URL_NOTIFICATION_SERVICE =
    API_GATEWAY + process.env.REACT_APP_BASE_URL_NOTIFICATION_SERVICE;

class NotificationService {
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

export default new NotificationService();
