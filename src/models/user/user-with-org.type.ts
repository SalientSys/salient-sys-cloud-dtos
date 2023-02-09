import { IUser } from './user.interface';

export interface IUserWithOrg extends Partial<IUser> {
  organizationName?: string | null;
  organizationType?: string | null;
}
