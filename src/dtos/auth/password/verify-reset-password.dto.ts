import { INotificationDestinationsDTO } from '../../shared';

export interface IVerifyResetPasswordDTO extends INotificationDestinationsDTO {
  resetPassword: string;
  accessCode: string;
}
