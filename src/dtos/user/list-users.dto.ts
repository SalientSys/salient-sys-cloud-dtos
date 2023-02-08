/**
 * String booleans used in the query string validation.
 */

import { StringBoolean } from '../../misc';

export interface IListUsersDTO {
  isCommercial?: StringBoolean;
  includeSalient?: StringBoolean;
}
