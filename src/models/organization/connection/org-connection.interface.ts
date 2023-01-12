export interface IOrganizationConnection {
  /** Mongo object id of connection */
  _id: string;
  integratorOrgId: string;
  endUserOrgId: string;
  /** Array of deployments shared between the two orgs. */
  deployments: string[];
}
