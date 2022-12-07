import { IDeploymentV2 } from '../../models/deployment/deployment-v2.interface';
import { DeepPartial } from '../../misc/deep-partial';

export type IPutDeploymentsV2DTO = DeepPartial<IDeploymentV2>;
