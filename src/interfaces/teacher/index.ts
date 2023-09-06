import { RenamedclassInterface } from 'interfaces/renamedclass';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  subject: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  Renamedclass?: RenamedclassInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    Renamedclass?: number;
  };
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
  subject?: string;
  user_id?: string;
  organization_id?: string;
}
