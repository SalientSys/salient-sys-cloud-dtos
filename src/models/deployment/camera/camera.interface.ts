import { DriverType } from './driver-type.enum';
import { ICone } from './cone.interface';
import { PtzSetting } from './ptz/ptz-settings.interface';

interface ICameraEntity {
  cameraId: string;
  cameraGuid: string;
  cameraName: string;
  cameraTimeZone: string;
}

interface ICamera {
  cameraId: string;
  cameraGuid: string;
  isEnabled: boolean;
  name: string;
  cone: ICone;
  channelNo: number;
  recordingServerId: string;
  latitude: string | null;
  longitude: string | null;
  timeZone: string;
  ptzSetting: PtzSetting | null;
  serverGuid: string;
  driverType: DriverType;
  state: string;
  ipStreamType: string;
  cameraEntity: ICameraEntity;
}

export { ICameraEntity, ICamera };
