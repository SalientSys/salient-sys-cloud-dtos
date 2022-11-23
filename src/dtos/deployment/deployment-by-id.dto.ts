import { PrimaryIdQueryParams } from '../../misc/primary-id-query-parameters';

export interface IDeploymentByIdDTO {
  [PrimaryIdQueryParams.DeploymentId]: string;
}
