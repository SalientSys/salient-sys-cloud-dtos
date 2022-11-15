import { PrimaryIdQueryParams } from '../../misc';

interface IPutNotificationByIdDTO {
  [PrimaryIdQueryParams.NotificationId]: string;
}

enum InviteStatus {
  Accepted = 'accepted',
  Ignored = 'ignored',
}

interface IInviteUpdateDTO {
  status: InviteStatus;
}

export { IPutNotificationByIdDTO, InviteStatus, IInviteUpdateDTO };
