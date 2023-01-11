/**
 * @description The recipient/destination of a notification, either an userId, a email, or a phone number
 * Ideally, we'd want a union type of email | userId but that is not supported by mongoose yet.
 */
export interface INotificationRecipient {
  /** Email of recipient (should be defined iff outbound.email.enabled === true)*/
  email?: string;
  /** Mongo object id of recipient */
  userId?: string;
  //!! Tony, I forgor what this is actually used for 💀
  organizationId?: string;
}
