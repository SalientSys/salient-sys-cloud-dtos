import { UserRole } from '../../models/user/user-role.enum';
import { IContact } from '../../models/shared';

export interface IUserResponse {
  _id: string;
  contact: IContact;
  permissions: {
    role: UserRole;
  };
  subscribedToCommercialEmails: boolean;
}
