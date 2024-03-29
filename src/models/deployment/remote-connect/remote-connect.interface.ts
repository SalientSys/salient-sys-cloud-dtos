import { IAccessInfo } from './access-info.interface';
import { IRemoteConnectStatus } from './remote-connect-status.interface';

export interface IRemoteConnect {
  status: IRemoteConnectStatus;
  accessInfo?: IAccessInfo[];
  proxyHost?: string;
  environment?: string;
  /** Account id used for all gateway deployment requests */
  accountId?: string;
}
