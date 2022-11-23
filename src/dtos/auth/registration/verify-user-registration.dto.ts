import { IInviteDTO } from '../../shared';

interface IVerifyUserRegistrationDTO {
  email: string;
  accessCode: string;
}

type IDoNotContactDTO = IVerifyUserRegistrationDTO;
type IResendVerificationDTO = IInviteDTO;

export { IVerifyUserRegistrationDTO, IDoNotContactDTO, IResendVerificationDTO };
