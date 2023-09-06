import { AttendanceInterface } from 'interfaces/attendance';
import { RenamedclassInterface } from 'interfaces/renamedclass';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  first_name: string;
  last_name: string;
  enrollment_date: any;
  class_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  Renamedclass?: RenamedclassInterface;
  user?: UserInterface;
  _count?: {
    attendance?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  class_id?: string;
  user_id?: string;
}
