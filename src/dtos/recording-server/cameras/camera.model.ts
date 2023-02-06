import { Cone } from "./cone.model";
import { PtzSetting } from "./ptz-settings.model";


interface ICameraEntity {
  cameraId: string,
  cameraGuid: string,
  cameraName: string,
  cameraTimeZone: string,
}

interface ICamera {
  videoDevice: any | null;
  advancedSetting: any | null;
  edgeSetting: any | null;
  recordingSetting: any | null;
  camera360Lens: any | null;
  ipSetting: any | null;
  stretchSetting: any | null;
  ptzSetting: PtzSetting | null;
  streamProcessing: any | null;
  cone: Cone | null;
  nvrCamera: any | null;
  cameraEvents: any | null;
  motionZones: any | null;
  mediaStreams: any | null;
  cameraSchedules: any | null;
  recordingServer: any | null;
  volumes: any | null;
  cameraId: number;
  cameraGuid: string;
  recordingServerId: number;
  videoDeviceId: number;
  isEnabled: boolean;
  name: string;
  timeZone: string;
  cameraNo: number;
  channelNo: number;
  /** ENUM */
  alarmPresetType: number;
  motionSensitivity: number;
  latitude: string | null;
  longitude: string | null;
  advancedSettingId: any | null;
  edgeSettingId: number;
  recordingSettingId: number;
  camera360LensId: number;
  ipSettingId: number;
  stretchSettingId: number;
  ptzSettingId: number;
  streamProcessingId: number;
  coneId: number;
  note: any | null;
  manufacturer: any | null;
  model: any | null;
  connectionType: any | null;
  isAnalog: boolean;
  isNetwork: boolean;
  driverType: any | null;
  serverGuid: string;
  state: string;
  ipStreamType: string;
  cameraEntity: ICameraEntity;
}

export { ICameraEntity, ICamera }