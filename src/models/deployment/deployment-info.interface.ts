import { IDeploymentFeatures } from './deployment-features.interface';
import { IIsRegistered } from './is-registered.interface';
import { IManagementServer } from './management-server.interface';

export interface IDeploymentInfo extends IIsRegistered, IManagementServer {
  /** Primary mongo *string* id of deployment. Should be same as guid */
  _id: string;
  /** Holds all feature info for deployment. Currently only tracks remote connect.*/
  features: IDeploymentFeatures;
  /** Port for deployment */
  port: number;
}
