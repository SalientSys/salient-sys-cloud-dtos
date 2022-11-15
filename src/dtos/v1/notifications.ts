import { PrimaryIdQueryParams } from '../../misc';

interface IPutNotificationByIdDTO {
  [PrimaryIdQueryParams.NotificationId]: string;
}

enum InviteStatus {
  Accepted = 'accepted',
  Ignored = 'ignored',
}

interface INotificationStatusUpdateDTO {
  status: InviteStatus;
}

export { IPutNotificationByIdDTO, INotificationStatusUpdateDTO };
