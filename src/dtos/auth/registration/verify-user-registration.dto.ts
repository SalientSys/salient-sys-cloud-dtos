import { INotificationDestinationsDTO } from '../../notification/notification-destinations.dto';
import { IAccessCodeVerifyDTO } from '../../shared';

type IVerifyUserRegistrationDTO = IAccessCodeVerifyDTO;

type IResendVerificationDTO = INotificationDestinationsDTO;

export { IVerifyUserRegistrationDTO, IResendVerificationDTO };
