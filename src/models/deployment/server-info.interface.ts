/**
 * Base server info used for all recorder types
 */
export interface IServerInfo {
  /** Primary id of server. Should be identical to _id in mongo */
  guid: string;
  /** Host address of recorder. Should be an IP address. */
  hostAddress: string;
  /** Port used for http access */
  httpInsecurePort: number;
  /** Port used for https access */
  httpSecurePort: number;
  /** Port used for tcp access */
  tcpInsecurePort: number;
  /** Port used for secure tcp access */
  tcpSecurePort: number;
  /** Port used for admin tcp access */
  tcpAdminPort: number;
}
