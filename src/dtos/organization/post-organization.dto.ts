import { IContact, IOrganization, OrganizationType } from '../../models';
import { DeepPartial } from '../../misc/deep-partial';

export interface IPostOrganizationDTO extends DeepPartial<IOrganization> {
  name: string;
  organizationType: OrganizationType;
  contact: IContact;
  mailingAddress: string;
}
