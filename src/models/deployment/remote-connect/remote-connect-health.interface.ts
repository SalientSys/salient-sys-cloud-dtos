import { HealthState } from './health-state.enum';

/**
 * Detailed health state of remote connect. Defaults to 'pending'. If not defined, reverts to (soon to be deprecated) gateway state.
 * @param env0 health first stage of deployment
 * @param vpn health state of vpn
 * @param proxy health state of proxy
 * @param managementServer Health state of ms. Healthy if any request to ms sends any response.
 * @param recorders: Map of health state of all recorders. A recorder is healthy if server sends back any response.
 */
export interface IRemoteConnectHealth {
    env0: HealthState;
    vpn: HealthState;
    proxy: HealthState;
    managementServer: HealthState;
    recorders: { [guid: string]: HealthState };
  }