import { NotificationSystem } from './notification-system.enum';

// TODO: Change `email` field to mandantory.
/**
 * @description The requestor/origin of a notification
 */
export interface INotificationRequestor {
  /** IP address of requestor */
  ipAddress?: string;
  /** Mongo object id of requestor */
  userId?: string;
  /** Email of requestor (should be mandatory if notification is sent by user) */
  email?: string;
  //!! Tony, I don't know what this is 😅
  system?: NotificationSystem;
  /** Organization object id of requestor (Only defined if requestor belong to org.) */
  organizationId?: string;
}
