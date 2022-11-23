import { PrimaryIdQueryParams } from '../../../misc/primary-id-query-parameters';
import { IDeploymentByIdDTO } from '../../deployment/deployment-by-id.dto';

interface IOrgConnectionByIdDTO {
  [PrimaryIdQueryParams.OrganizationConnectionId]: string;
}

type IOrgConnectionByDeploymentIdDTO = IDeploymentByIdDTO;

export { IOrgConnectionByIdDTO, IOrgConnectionByDeploymentIdDTO };
