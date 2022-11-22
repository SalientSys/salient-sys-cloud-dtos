import { IDeploymentInfo } from './deployment-info.interface';

export interface IDeployment extends IDeploymentInfo {
  recorders?: string[];
}
