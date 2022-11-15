import { IContact } from '../shared';

interface IPatchOrganizationDTO {
  contact?: IContact;
  mailingAddress?: string;
  users?: string[];
}
export { IPatchOrganizationDTO };
