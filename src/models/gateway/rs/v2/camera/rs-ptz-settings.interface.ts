export interface RsPtzSettings {
  enablePTZ: boolean;
  channelId: number;
  ptzDriver: string;
  flipdirections: boolean;
  serialPort: number;
  persistConnection: boolean;
  autohome: boolean;
  inactivityTime: number;
  presettour: boolean;
  touroffonstart: boolean;
  tourResumeTime: number;
  presets: [
    {
      presetIndex: number;
      presetName: string;
      dwellTime: number;
      includeTour: boolean;
    },
  ];
  homepresets: [
    {
      presetIndex: number;
      priority: number;
    },
  ];
}
