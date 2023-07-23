import { axiosPrivate } from '../api/axios';

const NOTIFICATION_URL =
    process.env.REACT_APP_API_GATEWAY + '/api/v1/notification-service/notification';
class NotificationService {
    getAllByRecipientId(recipientId) {
        return axiosPrivate.get(NOTIFICATION_URL + '/' + recipientId);
    }

    getAllByRecipientIdTop5(recipientId) {
        return axiosPrivate.get(NOTIFICATION_URL + '/get-top-5/' + recipientId);
    }

    updateStatus(notificationId) {
        axiosPrivate.post(NOTIFICATION_URL + '/update-status/' + notificationId);
    }
}

export default new NotificationService();
