import { IDeploymentInfo } from './deployment-info.interface';
import { IRecordingServerContaining } from './recorder/recording-server-containing.interface';

interface IDeploymentV20 extends IDeploymentInfo, IRecordingServerContaining {}

export { IDeploymentV20 };
