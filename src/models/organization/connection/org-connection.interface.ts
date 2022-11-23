export interface IOrganizationConnection {
  _id: string;
  integratorOrgId: string;
  endUserOrgId: string;
  deployments: string[];
}
