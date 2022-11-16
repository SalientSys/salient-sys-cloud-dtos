import { PrimaryIdQueryParams } from '../../misc';

interface IPutNotificationByIdDTO {
  [PrimaryIdQueryParams.NotificationId]: string;
}

enum InviteStatus {
  Accepted = 'accepted',
  Ignored = 'ignored',
}
interface INotificationStatusUpdateDTOV1 {
  status: InviteStatus;
}

export { IPutNotificationByIdDTO, INotificationStatusUpdateDTOV1 };
