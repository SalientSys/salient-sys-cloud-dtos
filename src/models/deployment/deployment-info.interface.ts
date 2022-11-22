import { IDeploymentFeatures } from './deployment-features.interface';
import { IIsRegistered } from './is-registered.interface';
import { IManagementServer } from './management-server.interface';

export interface IDeploymentInfo extends IIsRegistered, IManagementServer {
  _id: string;
  features: IDeploymentFeatures;
  port: number;
}
