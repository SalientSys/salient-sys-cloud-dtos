import { PrimaryIdQueryParams } from '../../misc/primary-id-query-parameters';

export interface IUserByIdDTO {
  [PrimaryIdQueryParams.UserId]: string;
}
