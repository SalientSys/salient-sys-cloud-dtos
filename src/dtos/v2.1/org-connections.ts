import { PrimaryIdQueryParams } from '../../misc/primary-id-query-parameters';

interface IOrgConnectionByIdDTO {
  [PrimaryIdQueryParams.OrganizationConnectionId]: string;
}

interface IOrgConnectionByDeploymentIdDTO {
  [PrimaryIdQueryParams.DeploymentId]: string;
}

export { IOrgConnectionByDeploymentIdDTO, IOrgConnectionByIdDTO };
