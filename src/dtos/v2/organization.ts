import { IContact } from '../shared';

interface IPatchOrganizationDTO {
  contact?: IContact;
  mailingAddress?: string;
  users?: string[];
  name?: string;
}
export { IPatchOrganizationDTO };
