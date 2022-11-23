import { IContact } from '../../../models';

export interface IUserRegistrationDTO {
  password: string;
  contact: IContact;
}
