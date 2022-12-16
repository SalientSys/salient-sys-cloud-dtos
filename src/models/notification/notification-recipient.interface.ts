/**
 * @description The recipient/destination of a notification, either an userId, a email, or a phone number
 * Ideally, we'd want a union type of email | userId but that is not supported by mongoose yet.
 */
export interface INotificationRecipient {
  email?: string;
  userId?: string;
  organizationId?: string;
}
