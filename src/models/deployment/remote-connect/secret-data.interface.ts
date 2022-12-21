/**
 * Secret data being used by back-end (via env0) and gateway
 */
export interface ISecretData {
  ms: {
    guid: string;
    ip: string;
    port: number;
  };
  rs: {
    guid: string;
    vpnIp: string;
    ip: string;
    port1: number;
    port2: number;
    port3: number;
    port4: number;
    port5: number;
  }[];
}
