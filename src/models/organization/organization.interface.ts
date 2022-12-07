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
  // Tracks if organization has been updated to use the new org connections document
  //! TODO: Remove this once all documents in Organization collection are updated.
  isConnectionBuilt?: boolean;
}
