import { MsCameraDriverType } from './ms-camera-driver-type.enum';
import { MsCameraCone } from './ms-camera-cone.interface';
import { MsPtzSetting } from './ms-ptz-settings.interface';

export interface MsCamera {
  cameraId: string;
  cameraGuid: string;
  recordingServerId: string;
  isEnabled: boolean;
  name: string;
  cone: MsCameraCone;
  channelNo: number;
  latitude?: string;
  longitude?: string;
  timeZone: string;
  ptzSetting?: MsPtzSetting;
  serverGuid: string;
  driverType: MsCameraDriverType;
}
