import { IUser } from './user.interface';

export interface UserWithOrg extends Partial<IUser> {
  organizationName?: string | null;
  organizationType?: string | null;
}
