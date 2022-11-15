import { PrimaryIdQueryParams } from '../../misc';

interface IOrganizationByIdDTO {
  // It's weird that it's inside org connections but it's only because the route is in the org-connections and it's related to org-connections
  [PrimaryIdQueryParams.OrganizationId]: string;
}

interface IPostOrganizationConnectionDTO {
  email: string;
  deployments?: string[];
}

export { IOrganizationByIdDTO, IPostOrganizationConnectionDTO };
