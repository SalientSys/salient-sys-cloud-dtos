import { IContact, IInviteDTO } from '../shared';

interface IUserLoginDTO {
  email: string;
  password: string;
}

interface IResetPasswordDTO {
  email: string;
}

interface IVerifyResetPasswordDTO {
  email: string;
  resetPassword: string;
  accessCode: string;
}

interface IUserRegistrationDTO {
  password: string;
  pendingOrg?: string;
  contact: IContact;
  email: string;
}

interface IVerifyUserRegistrationDTO {
  email: string;
  accessCode: string;
}

type IResendVerificationDTO = IInviteDTO;
export {
  IUserLoginDTO,
  IResetPasswordDTO,
  IVerifyResetPasswordDTO,
  IUserRegistrationDTO,
  IVerifyUserRegistrationDTO,
  IResendVerificationDTO,
};
