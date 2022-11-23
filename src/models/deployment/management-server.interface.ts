export interface IManagementServer {
  managementServerGuid: string;
  deploymentName: string;
  hostAddresses: string[];
  cvVersion: string;
  osVersion: string;
  // Tracks guid of rs that is self hosted
  selfHostedRecorder?: string;
}
