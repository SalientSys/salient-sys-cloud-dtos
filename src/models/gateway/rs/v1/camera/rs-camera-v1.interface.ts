import { RsPtzSettingsV1 } from './rs-ptz-settings-v1.interface';
import { RsCameraPermissions } from './rs-camera-permissions.interface';

export interface RsCameraV1 {
  id: number;
  guid?: string;
  name: string;
  state: 'online' | 'failed';
  audioEnabled: boolean;
  lightAvailable: boolean;
  disableStreamProcessing: boolean;
  ipStreamType: string;
  cameraTimeZone?: string;
  permissions?: RsCameraPermissions;
  dimensions?: {
    width: number;
    height: number;
  };
  ptz?: RsPtzSettingsV1;
  fisheye: {
    lensType: string;
    lensOrientation: string;
    lensProfile: string;
    centerX: number;
    centerY: number;
    radius: number;
    lensCurveData: string;
    lensProfileData: string;
  };
}
