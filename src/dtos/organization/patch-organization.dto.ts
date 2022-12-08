import { IContact } from '../../models';

export interface IPatchOrganizationDTO {
  name?: string;
  contact?: IContact;
  mailingAddress?: string;
  users?: string[];
}
