import { UserRole } from './user-role.enum';
import { IUserSettings } from './user-settings.interface';
import { IContact } from '../shared';

export interface IUser {
  /** Primary mongo object id of user */
  _id: string;
  /** Contact info for user */
  contact: IContact;
  /** Advanced permissions for user. EG: tracks if user is an admin */

  permissions: {
    role: UserRole;
    tags: [];
  };
  /** Misc settings for user. */
  settings: IUserSettings;
}
