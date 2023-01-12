import { GatewayState } from './gateway-state.enum';
import { IRemoteConnectHealth } from './remote-connect-health.interface';
/**
 * @param isDeployed Tracks if remote connect deployments started
 * @param isPaused Tracks if remote connect is paused
 * @param gatewayState Deprecated. Tracked basic health info of gateway
 * @param health Detailed health info of gateway
 */
export interface IRemoteConnectStatus {
  isDeployed: boolean;
  isPaused: boolean;
  gatewayState?: GatewayState;
  health?: IRemoteConnectHealth;
}
