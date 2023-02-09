import { DriverType } from "./driver-type.model";
import { ICone } from "./cone.model";
import { PtzSetting } from "./ptz-settings.model";


interface ICameraEntity {
  cameraId: string,
  cameraGuid: string,
  cameraName: string,
  cameraTimeZone: string,
}

interface ICamera {
cameraId: string,
cameraGuid: string,
isEnabled: boolean,
name: string,
cone: ICone,
channelNo: number,
recordingServerId: string,
latitude: string | null,
longitude: string | null,
timeZone: string,
ptzSetting: PtzSetting | null,
serverGuid: string,
driverType: DriverType,
state: string;
ipStreamType: string;
cameraEntity: ICameraEntity;
}

export { ICameraEntity, ICamera }