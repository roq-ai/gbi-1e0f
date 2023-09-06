import * as yup from 'yup';

export const renamedclassValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  teacher_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
