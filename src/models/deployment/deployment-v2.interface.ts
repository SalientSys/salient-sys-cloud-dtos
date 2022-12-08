import { IDeploymentInfo } from './deployment-info.interface';
import { IRecordingServerContaining } from './recorder/recording-server-containing.interface';

interface IDeploymentV2 extends IDeploymentInfo, IRecordingServerContaining {}

export { IDeploymentV2 };
