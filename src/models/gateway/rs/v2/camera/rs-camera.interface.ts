import { RsCameraEntity } from './rs-camera-entity.interface';
import { RsPtzSettings } from './rs-ptz-settings.interface';

export interface RsCamera {
  enabled: true;
  cameraEntity: RsCameraEntity;
  ptzSettings: RsPtzSettings;
}
