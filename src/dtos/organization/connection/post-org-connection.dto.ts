import { INotificationDestinationsDTO } from '../../shared';

export interface IPostOrganizationConnectionDTO
  extends INotificationDestinationsDTO {
  deployments?: string[];
}
