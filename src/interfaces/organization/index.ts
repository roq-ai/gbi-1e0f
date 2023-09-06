import { RenamedclassInterface } from 'interfaces/renamedclass';
import { TeacherInterface } from 'interfaces/teacher';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  Renamedclass?: RenamedclassInterface[];
  teacher?: TeacherInterface[];
  user?: UserInterface;
  _count?: {
    Renamedclass?: number;
    teacher?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
