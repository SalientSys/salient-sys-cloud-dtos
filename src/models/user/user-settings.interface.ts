import { IDoNotContact } from './do-not-contact.interface';

export interface IUserSettings {
  doNotContactInfo?: Partial<IDoNotContact>;
}
