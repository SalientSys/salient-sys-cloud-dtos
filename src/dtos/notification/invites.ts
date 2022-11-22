import { IInviteDTO } from '../shared';

type IOrganizationAdminInviteDTO = IInviteDTO;

type IEndUserInviteDTO = IInviteDTO;

interface IDeploymentIntegratorInviteDTO extends IInviteDTO {
  message?: string;
}

export {
  IOrganizationAdminInviteDTO,
  IEndUserInviteDTO,
  IDeploymentIntegratorInviteDTO,
};
