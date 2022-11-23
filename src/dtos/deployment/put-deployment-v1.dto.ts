import { IDeploymentV1 } from '../../models/deployment/deployment-v1.interface';
import { DeepPartial } from '../../misc/deep-partial';

export type IPutDeploymentsV2DTO = DeepPartial<IDeploymentV1>;
