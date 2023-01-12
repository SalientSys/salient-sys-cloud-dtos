import { OrganizationType } from './organization-type.enum';
import { IContact } from '../shared/contact.interface';

export interface IOrganization {
  /** Primary mongo object id of organization */
  _id: string;
  /** Friendly name of organization */
  name: string;
  /** Object holding all relevant contact info */
  contact: IContact;
  /** Physical address of organization */
  mailingAddress: string;
  /** Type of org. EG: 'end-user', 'integrator', etc. */
  organizationType: OrganizationType;
  /** Array of mongo object ids for users */
  users: string[];
  /** Array of mongo string ids for deployments */
  deploymentInstances: string[];
  // Tracks if organization has been updated to use the new org connections document
  //! TODO: Remove this once all documents in Organization collection are updated.
  isConnectionBuilt?: boolean;
}
