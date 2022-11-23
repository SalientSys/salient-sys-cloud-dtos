import { INotificationData } from './notification-data.interface';
import { INotificationRecipient } from './notification-recipient.interface';
import { INotificationRequestor } from './notification-requestor.interface';
import {
  INotificationInternalResult,
  INotificationOutboundResult,
} from './notification-result.interface';
import { NotificationStatus } from './notification-status.enum';
import { NotificationType } from './notification-type.enum';

export interface INotification {
  _id: string;
  status: NotificationStatus;
  notificationType: NotificationType;
  message?: string;

  createdAt: string; // UTC timestamp
  updatedAt?: string; // UTC timestamp

  recipient: INotificationRecipient;
  requestor?: INotificationRequestor;

  outbound?: INotificationOutboundResult;
  internal?: INotificationInternalResult;
  data?: INotificationData;
}
