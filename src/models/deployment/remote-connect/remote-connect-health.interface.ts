import { HealthState } from './health-state.enum';
/**
 * Detailed health state of remote connect. Defaults to 'pending'. If not defined, reverts to (soon to be deprecated) gateway state.
 * @param account Health of first stage of deployment. Ensures there is an appropriate account to bill for deployment
 * @param env0 health of second stage of deployment. This is env0 environment that actually kickstarts remote-connect process.
 * @param vpn health state of vpn
 * @param proxy health state of proxy
 * @param managementServer Health state of ms. Healthy if any request to ms sends any response.
 * @param recorders: Map of health state of all recorders. A recorder is healthy if server sends back any response.
 */
export interface IRemoteConnectHealth {
  account: HealthState;
  env0: HealthState;
  vpn: HealthState;
  proxy: HealthState;
  managementServer: HealthState;
  recorders: Map<string, HealthState>;
}
