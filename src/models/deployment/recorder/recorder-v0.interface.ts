import { LicenseType } from './license-type.enum';
import { IFeatureKey } from './feature-key.interface';
import { IServerInfo } from '../server-info.interface';
import { ICoordinates } from '../../shared/coordinate.interface';

export interface IRecorderV0 extends IServerInfo {
  friendlyName: string;
  hostName: string;
  cvVersion: string;
  osVersion: string;
  timeZone: string;
  coordinates?: ICoordinates;
  licenseType: LicenseType;
  productId: string;
  ipLicensesTotal: number;
  ipLicensesUsed: number;
  analogLicensesTotal: number;
  analogLicensesUsed: number;
  featureKeys: IFeatureKey[];
}
