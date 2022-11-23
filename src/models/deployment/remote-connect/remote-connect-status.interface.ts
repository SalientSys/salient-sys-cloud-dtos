import { GatewayState } from './gateway-state.enum';

export interface IRemoteConnectStatus {
  isDeployed: boolean;
  isPaused: boolean;
  gatewayState?: GatewayState;
}
