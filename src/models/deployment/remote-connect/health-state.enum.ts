/**
 * State of various properties of remote connect process (env0,proxy,vpn,ms,rs)
 */
export enum HealthState {
  healthy = 'healthy',
  unhealthy = 'unhealthy',
  pending = 'pending',
}
