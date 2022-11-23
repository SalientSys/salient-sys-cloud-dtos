export enum NotificationType {
  OrganizationAdminInvite = 'organization-admin-invite',
  OrganizationMemberInvite = 'organization-member-invite',
  OrganizationUserJoined = 'user-joined-organization',
  OrganizationUserLeft = 'user-left-organization',

  OrgConnectionRequest = 'organization-connection-request',
  OrgConnectionAdded = 'organization-connection-added',
  OrgConnectionRemoved = 'organization-connection-removed',
  OrgConnectionDeploymentSharingAdded = 'org-connection-deployment-sharing-added',
  OrgConnectionDeploymentSharingRemoved = 'org-connection-deployment-sharing-removed',

  DeploymentQuoteRequestData = 'deployment-quote-request',

  UserRegistration = 'user-registration',
  UserRegistrationVerification = 'user-registration-verification',
  UserPasswordReset = 'user-password-reset',
  Other = 'other',
}
