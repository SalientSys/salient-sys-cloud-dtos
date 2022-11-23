import { INotificationDestinationsDTO } from '../notification/notification-destinations.dto';

/**
 * Being used for verifing registration endpoint or do-not-contact endpoints.
 */
export interface IAccessCodeVerifyDTO extends INotificationDestinationsDTO {
  accessCode: string;
}
