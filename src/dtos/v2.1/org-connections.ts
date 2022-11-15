import { PrimaryIdQueryParams } from '../../misc/primary-id-query-parameters';
import { IDeploymentByIdDTO } from '../v1';

interface IOrgConnectionByIdDTO {
  [PrimaryIdQueryParams.OrganizationConnectionId]: string;
}

type IOrgConnectionByDeploymentIdDTO = IDeploymentByIdDTO;

export { IOrgConnectionByDeploymentIdDTO, IOrgConnectionByIdDTO };
