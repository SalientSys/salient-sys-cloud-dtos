import { PrimaryIdQueryParams } from '../../misc';
import { IContact } from '../shared';

interface IUserByIdDTO {
  [PrimaryIdQueryParams.UserId]: string;
}

interface IUserSettings {
  doNotContactInfo?: Partial<IDoNotContact>;
}

interface IDoNotContact {
  doNotContact: boolean;
  accessCode: string;
}

interface IPatchUserDTO {
  contact?: Partial<Omit<IContact, 'email'>>;
  settings?: IUserSettings;
}

export { IUserByIdDTO, IPatchUserDTO, IUserSettings, IDoNotContact };
