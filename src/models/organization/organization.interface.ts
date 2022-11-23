import { OrganizationType } from './organization-type.enum';
import { IContact } from '../shared/contact.interface';

export interface IOrganization {
  _id: string;
  name: string;
  contact: IContact;
  mailingAddress: string;
  organizationType: OrganizationType;
  users: string[];
  deploymentInstances: string[];
}
