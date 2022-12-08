import { UserRole } from './user-role.enum';
import { IUserSettings } from './user-settings.interface';
import { IContact } from '../shared';

export interface IUser {
  _id: string;
  contact: IContact;
  permissions: {
    role: UserRole;
  };
  settings: IUserSettings;
}
