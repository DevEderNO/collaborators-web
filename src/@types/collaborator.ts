import { IContact } from './contact';

export interface ICollaborator {
  id: string;
  image_url: string;
  name: string;
  id_office: string;
  id_team: string;
  competence: string;
  contacts: IContact[];
  address: string;
}
