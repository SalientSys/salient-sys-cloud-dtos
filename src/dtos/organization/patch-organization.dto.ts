import { IContact } from '../../models';

export interface IPatchOrganizationDTO {
  contact?: IContact;
  mailingAddress?: string;
  users?: string[];
  name?: string;
}
