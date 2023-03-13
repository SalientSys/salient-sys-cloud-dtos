/**
 * An interface representing a gateway deployment.
 *
 * @interface
 * @property {string} deploymentName - The name of the deployment.
 * @property {string} customerName - The name of the customer.
 * @property {string} customerTag - The customer tag.
 * @property {string|undefined} [accountId=undefined] - The ID of the account.
 * @property {string|undefined} [accountEnvironmentId=undefined] - ID used by env0 to identify the account environment. Used in the back-end to track deployment progress.
 * @property {string|undefined} [gatewayEnvironmentId=undefined] - ID used by env0 to identify the gateway environment. Used in the back-end to track deployment progress. @property {string|undefined} [vpcCidrBlock=undefined] - The CIDR block for the VPC.
 * @property {string|undefined} [cloudProxyEcrTag=undefined] - The ECR tag for the cloud proxy.
 * @property {string|undefined} [createPrivateLink=undefined] - Whether to create a private link. @property {string|undefined} [openVpnClientDhcpNetwork=undefined] - The network for the OpenVPN client DHCP configuration.
 * @property {string|undefined} [openVpnClientDhcpNetworkMask=undefined] - The network mask for the OpenVPN client DHCP configuration.
 * @property {string|undefined} [openVpnClientStaticNetwork=undefined] - The static network for the OpenVPN client.
 * @property {string|undefined} [openVpnClientStaticNetworkMask=undefined] - The static network mask for the OpenVPN client.
 * @property {string|undefined} [revision=undefined] - The revision of the deployment.
 */
interface IRemoteConnectInfo {
  deploymentName: string;
  customerName: string;
  customerTag: string;
  accountId?: string;
  accountEnvironmentId?: string;
  gatewayEnvironmentId?: string;
  vpcCidrBlock?: string;
  cloudProxyEcrTag?: string;
  createPrivateLink?: string;
  openVpnClientDhcpNetwork?: string;
  openVpnClientDhcpNetworkMask?: string;
  openVpnClientStaticNetwork?: string;
  openVpnClientStaticNetworkMask?: string;
  revision?: string;
}

type IRemoteConnectInfoDTO = IRemoteConnectInfo;

export { IRemoteConnectInfo, IRemoteConnectInfoDTO };
