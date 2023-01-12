import { IFeatureKey } from './feature-key.interface';
import { LicenseType } from './license-type.enum';
import { ICoordinates } from '../../shared';
import { IServerInfo } from '../server-info.interface';

export interface IRecorder extends IServerInfo {
  /** Mongo *string* id of recorder. Should be same as guid. */
  _id: string;
  /** Name of recorder to present to end-user */
  friendlyName: string;
  /** Name of hosting computer. Often the same as host address */
  hostName: string;
  /** Version of complete view */
  cvVersion: string;
  /** Operating system version */
  osVersion: string;
  /** Timezone used for recorder. "Friendly" formatting. EG: "Central Standard Time" */
  timeZone: string;
  /** Coordinates of recoder in longitude/latitude */
  coordinates?: ICoordinates;
  /** Type of recorder. Eg: trial, pro */
  licenseType: LicenseType;
  /** Id related to licensing. Used internal to produce feature keys. */
  productId: string;
  /** Max count of ip licenses available for recorder */
  ipLicensesTotal: number;
  /** Current used count of ip licenses. */
  ipLicensesUsed: number;
  /** Max count of analog licenses available for recorder */
  analogLicensesTotal: number;
  /** Current used count of analog licenses. */
  analogLicensesUsed: number;
  /** Array of features available to recorder. */
  featureKeys: IFeatureKey[];
  /** Internal param to track if recording server is hidden */
  isRefrigerated?: boolean;
}
