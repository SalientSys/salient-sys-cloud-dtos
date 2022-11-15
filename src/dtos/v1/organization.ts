import { DeepPartial } from '../../misc/deep-partial';
import { IContact } from '../shared';

enum OrganizationType {
  Integrator = 'integrator',
  EndUser = 'end-user',
  Other = 'other',
}

interface IOrganization {
  name: string;
  contact: IContact;
  mailingAddress: string;
  organizationType: OrganizationType;
  users: string[];
  deploymentInstances: string[];
  // Tracks if organization has been updated to use the new org connections document
  isConnectionBuilt?: boolean;
}

type IPostOrganizationDTO = DeepPartial<IOrganization>;
export { IOrganization, IPostOrganizationDTO };
