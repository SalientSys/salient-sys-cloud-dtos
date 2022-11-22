import { PrimaryIdQueryParams } from '../../misc/primary-id-query-parameters';

export interface IPutNotificationByIdDTO {
  [PrimaryIdQueryParams.NotificationId]: string;
}
