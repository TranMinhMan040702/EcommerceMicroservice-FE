import { axiosPrivate } from '../api/axios';
const REACT_APP_BASE_URL_NOTIFICATION_SERVICE = process.env.REACT_APP_BASE_URL_NOTIFICATION_SERVICE;

class Notification {
getAllByRecipientId(recipientId) {
      return axiosPrivate.get(REACT_APP_BASE_URL_NOTIFICATION_SERVICE + '/' + recipientId);
  }

  @GetMapping("/get-top-5/{recipientId}")
  ResponseEntity<?> findAllByRecipientIdTop5(@PathVariable("recipientId") Integer recipientId) {
      return ResponseEntity.ok(notificationService.findByRecipientIdTop5(recipientId));
  }

  @PostMapping("/update-status/{notificationId}")
  void updateStatus(@PathVariable("notificationId") Integer notificationId) {
      notificationService.updateStatus(notificationId);
  }
}

export default new Notification();
