import { NotificationSystem } from './notification-system.enum';

/**
 * @description The requestor/origin of a notification
 */
export interface INotificationRequestor {
  ipAddress?: string;
  userId?: string;
  email?: string;
  system?: NotificationSystem;
}
