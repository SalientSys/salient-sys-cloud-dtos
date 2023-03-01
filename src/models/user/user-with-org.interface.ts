import { IUser } from './user.interface';
import { IOrganization } from '../organization';

export interface IUserWithOrg extends Partial<IUser> {
  organization: IOrganization | null;
}
