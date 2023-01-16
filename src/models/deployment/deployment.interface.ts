import { IDeploymentInfo } from './deployment-info.interface';

export interface IDeployment extends IDeploymentInfo {
  /** Array of recorder mongo ids. If recorder id is in here, then the deployment "owns" the recorder. */
  recorders?: string[];
}
