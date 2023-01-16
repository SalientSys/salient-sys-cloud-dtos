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
  /**Reserved field for future use. Original source of notification (MS, RS, AWS, or the Back-end itself) */
  system?: NotificationSystem;
  /** Organization object id of requestor (Only defined if requestor belong to org.) */
  organizationId?: string;
}
