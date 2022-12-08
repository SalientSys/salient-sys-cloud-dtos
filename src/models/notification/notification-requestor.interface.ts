import { NotificationSystem } from './notification-system.enum';

// TODO: Change `email` field to mandantory.
/**
 * @description The requestor/origin of a notification
 */
export interface INotificationRequestor {
  ipAddress?: string;
  userId?: string;
  email?: string;
  system?: NotificationSystem;
}
