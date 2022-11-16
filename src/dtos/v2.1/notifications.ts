enum NotificationStatus {
  Unread = 'unread',
  Read = 'read',
  Deleted = 'deleted',
}
interface INotificationStatusUpdateDTO {
  status: NotificationStatus;
}

export { INotificationStatusUpdateDTO };
