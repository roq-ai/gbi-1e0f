import { AttendanceInterface } from 'interfaces/attendance';
import { StudentInterface } from 'interfaces/student';
import { TeacherInterface } from 'interfaces/teacher';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface RenamedclassInterface {
  id?: string;
  name: string;
  start_time: any;
  end_time: any;
  teacher_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  student?: StudentInterface[];
  teacher?: TeacherInterface;
  organization?: OrganizationInterface;
  _count?: {
    attendance?: number;
    student?: number;
  };
}

export interface RenamedclassGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  teacher_id?: string;
  organization_id?: string;
}
