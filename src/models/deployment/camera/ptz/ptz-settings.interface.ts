import { IPtzPreset } from './ptz-preset.interface';

export interface PtzSetting {
  presets: IPtzPreset[] | null;
  ptzSettingId: number;
  isPtzEnabled: boolean;
  channelNo: number;
  ptzDriver: string;
  serialPort: number;
  doFlipDirections: boolean;
  tourResumeTime: string;
  inactivityTimeoutInterval: string;
  doAutoHome: boolean;
  doPresetTour: boolean;
  doTourOffOnStart: boolean;
  doPersistConnection: boolean;
  useAnalogPtz: boolean;
  homePreset1: number;
  homePreset2: number;
  homePreset3: number;
  homePreset4: number;
}
