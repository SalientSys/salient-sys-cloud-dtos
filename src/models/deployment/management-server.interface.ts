export interface IManagementServer {
  /** Used only during registration process. GUID that is used to create object id for deployment */
  managementServerGuid: string;
  /** Friendly deployment name.*/
  deploymentName: string;
  /** Array of host addresses used for deployment. There can be overlap here with `hostAddress` field for a recorder if self-hosted. */
  hostAddresses: string[];
  /** Complete view version used for management server */
  cvVersion: string;
  /** Operating system version */
  osVersion: string;
  // Tracks guid of rs that is self hosted. (Deprecated I think)
  selfHostedRecorder?: string;
}
