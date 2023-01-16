/**
 * Status of notification
 * @readonly
 * @enum {string}
 */
export enum NotificationStatus {
  /** For notifications that are unread*/
  Unread = 'unread',
  /** For notifications that have been viewed */
  Read = 'read',
  /** For deleted notifications */
  Deleted = 'deleted',
}
