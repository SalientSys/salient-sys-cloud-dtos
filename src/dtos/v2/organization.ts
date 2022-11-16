import { IContact } from '../shared';

interface IPatchOrganizationDTO {
  contact?: IContact;
  mailingAddress?: string;
  name?: string;
  users?: string[];
}
export { IPatchOrganizationDTO };
