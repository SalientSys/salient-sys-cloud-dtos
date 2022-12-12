interface IGatewayDeployment {
  deploymentName: string;
  customerName: string;
  customerTag: string;
  // optional advanced variables
  cloudProxyEcrTag?: string;
  createPrivateLink?: string;
  openVpnClientDhcpNetwork?: string;
  openVpnClientDhcpNetworkMask?: string;
  openVpnClientStaticNetwork?: string;
  openVpnClientStaticNetworkMask?: string;
}

type IGatewayDeploymentDTO = IGatewayDeployment;

export { IGatewayDeployment, IGatewayDeploymentDTO };
