interface IGatewayDeployment {
  deploymentName: string;
  customerName: string;
  customerTag: string;
  accountId: string;
  accountEnvironmentId: string;
  gatewayEnvironmentId: string;
  // optional advanced variables
  vpcCidrBlock?: string;
  cloudProxyEcrTag?: string;
  createPrivateLink?: string;
  openVpnClientDhcpNetwork?: string;
  openVpnClientDhcpNetworkMask?: string;
  openVpnClientStaticNetwork?: string;
  openVpnClientStaticNetworkMask?: string;
  revision?: string;
}

type IGatewayDeploymentDTO = IGatewayDeployment;

export { IGatewayDeployment, IGatewayDeploymentDTO };
