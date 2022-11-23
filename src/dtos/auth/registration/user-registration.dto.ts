import { IContact } from '../../../models';

export interface IUserRegistrationDTO {
  password: string;
  pendingOrg?: string;
  contact: IContact;
}
