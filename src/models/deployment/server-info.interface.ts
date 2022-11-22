export interface IServerInfo {
  guid: string;
  hostAddress: string;
  httpInsecurePort: number;
  httpSecurePort: number;
  tcpInsecurePort: number;
  tcpSecurePort: number;
  tcpAdminPort: number;
}
