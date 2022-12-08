import { IFeatureKey } from './feature-key.interface';
import { LicenseType } from './license-type.enum';
import { ICoordinates } from '../../shared';
import { IServerInfo } from '../server-info.interface';

export interface IRecorder extends IServerInfo {
  _id: string;
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
  isRefrigerated?: boolean;
}
