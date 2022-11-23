interface IGatewayDeployment {
  deploymentName: string;
  customerName: string;
  customerTag: string;
}

type IGatewayDeploymentDTO = IGatewayDeployment;

export { IGatewayDeployment, IGatewayDeploymentDTO };
