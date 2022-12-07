/**
 * A destination (either email or a phone number) to receive notifications/messages.
 * Either email or phone has to be present
 */
export interface INotificationDestinationsDTO {
  email: string;
  phone?: string;
}
