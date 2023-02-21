import { RsCameraV1 } from './rs-camera-v1.interface';

export interface RsCamerasResponseV1 {
  servers: [
    {
      address: string;
      name: string;
      serialNumber: string;
      license: string;
      dptzPlayback: boolean;
      product: {
        name: string;
        version: string;
      };
      timeZone: string;
      utcOffset: string;
      cameras: RsCameraV1[];
    }?,
  ];
}
