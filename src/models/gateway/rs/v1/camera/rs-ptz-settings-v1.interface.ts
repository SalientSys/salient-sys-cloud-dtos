export interface RsPtzSettingsV1 {
  pan: boolean;
  tilt: boolean;
  zoom: boolean;
  iris?: boolean;
  focus?: boolean;
  autoIris?: boolean;
  autoFocus?: boolean;
  reset: boolean;
  presets: number;
  digital: boolean;
  presetNames: string[];
}
