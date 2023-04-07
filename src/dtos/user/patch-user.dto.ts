import { IContact, IUserSettings } from '../../models';

export interface IPatchUserDTO {
  contact?: Partial<Omit<IContact, 'email'>>;
  settings?: IUserSettings;

  permissions?: IPermissions;
}
