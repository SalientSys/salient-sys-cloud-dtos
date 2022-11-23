import { UserRole } from './user-role.enum';
import { IUserSettings } from './user-settings.interface';
import { IContact } from '../shared';

export interface IViewableUserInfo {
  contact: IContact;
  permissions: {
    role: UserRole;
  };
  settings: IUserSettings;
}
