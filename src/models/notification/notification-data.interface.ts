/** Extra internal metadata for processing notification. */
interface INotificationData {
  orgConnectionRequestData?: IOrganizationConnectionRequestData;
  organizationAdminInviteData?: IOrganizationAdminInviteData;
  organizationMemberInviteData?: IOrganizationMemberInviteData;
  deploymentIntegratorInviteData?: IDeploymentIntegratorInviteData;
  deploymentQuoteRequestData?: IDeploymentQuoteRequestData;
}

// TODO: Update this along with notification schema to add notification details such as requestor's org Id
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IOrganizationAdminInviteData {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IOrganizationMemberInviteData {}

// TODO: Remove once back-end data is migrated
interface IDeploymentIntegratorInviteData {
  deploymentId: string;
}

enum RecipientStatus {
  Solicited = 'solicited',
  AccountCreated = 'account-created',
  OrganizationCreated = 'organization-created',
  OrganizationVerified = 'organization-verified',
  OrganizationAvailable = 'organization-available',
}

interface IOrganizationConnectionRequestData {
  integratorOrgId: string;
  endUserOrgId: string;
  deploymentIds?: string[];
  status?: RecipientStatus;
}

interface IDeploymentQuoteRequestData {
  organizationName: string;
  organizationId?: string;
  deploymentName: string;
  deploymentId: string;
  requestorEmail: string;
  associatedIntegratorEmail?: string;
  associatedIntegratorId?: string;
  cameraCount: number;
}

export {
  INotificationData,
  IOrganizationConnectionRequestData,
  IDeploymentQuoteRequestData,
  IDeploymentIntegratorInviteData,
  IOrganizationMemberInviteData,
  IOrganizationAdminInviteData,
};
