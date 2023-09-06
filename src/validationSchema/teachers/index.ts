import * as yup from 'yup';

export const teacherValidationSchema = yup.object().shape({
  subject: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
