import { DeepPartial } from '../../misc/deep-partial';
import { IInviteDTO } from '../shared';

interface IDeploymentIntegratorInviteDTO extends IInviteDTO {
  message?: string;
}
type IEndUserInviteDTO = IInviteDTO;

interface ICoordinates {
  latitude: string;
  longitude: string;
}

interface IFeatureKey {
  key: string;
  description: string;
  quantity: number;
}

enum LicenseType {
  Unknown = 0,
  One = 1,
  Pro = 2,
  Enterprise = 3,
  Trial = 4,
  Cloud = 5,
}

interface IManagementServer {
  managementServerGuid: string;
  deploymentName: string;
  hostAddresses: string[];
  cvVersion: string;
  osVersion: string;
}

interface IServerInfo {
  guid: string;
  hostAddress: string;
  httpInsecurePort: number;
  httpSecurePort: number;
  tcpInsecurePort: number;
  tcpSecurePort: number;
  tcpAdminPort: number;
}
interface IRecorderV0 extends IServerInfo {
  friendlyName: string;
  hostName: string;
  cvVersion: string;
  osVersion: string;
  timeZone: string;
  coordinates?: ICoordinates;
  licenseType: LicenseType;
  productId: string;
  ipLicensesTotal: number;
  ipLicensesUsed: number;
  analogLicensesTotal: number;
  analogLicensesUsed: number;
  featureKeys: IFeatureKey[];
}

interface IPostDeploymentDTO extends IManagementServer {
  recordingServers: IRecorderV0[];
}

interface IIsRegistered {
  isRegistered: boolean;
}

interface IRemoteConnect {
  status: IRemoteConnectStatus;
  accessInfo?: IAccessInfo[];
  proxyHost?: string;
  environment?: string;
}

enum GatewayState {
  okay = 'okay',
  deploying = 'deploying',
  failed = 'failed',
}

interface IRemoteConnectStatus {
  isDeployed: boolean;
  isPaused: boolean;
  gatewayState?: GatewayState;
}

interface IAccessInfo {
  ipAddress: string;
  openVpn: string;
  guid?: string;
}

interface IDeploymentFeatures {
  remoteConnect: IRemoteConnect;
}

interface IDeploymentV20 extends IIsRegistered, IPostDeploymentDTO {
  _id: string;
  features: IDeploymentFeatures;
  port: number;
}

type IPutDeploymentsV2DTO = DeepPartial<IDeploymentV20>;

interface IGatewayDeployment {
  deploymentName: string;
  customerName: string;
  customerTag: string;
}

export {
  IDeploymentIntegratorInviteDTO,
  IPostDeploymentDTO,
  IRecorderV0,
  IServerInfo,
  LicenseType,
  IFeatureKey,
  IEndUserInviteDTO,
  IPutDeploymentsV2DTO,
  IGatewayDeployment,
  GatewayState,
};
