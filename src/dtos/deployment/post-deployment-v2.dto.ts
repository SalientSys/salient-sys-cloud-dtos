import { IManagementServer, IRecordingServerContaining } from '../../models';

// TODO: Remove this type (need update for back-end and front-end first)

export interface IPostDeploymentDTO
  extends IManagementServer,
    IRecordingServerContaining {}
