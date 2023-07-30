import * as Yup from 'yup';

const validationRegistrationSchema = Yup.object({
    email: Yup.string().email('Enter a valid Email').required('Please, enter your email'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
});
  
export default validationRegistrationSchema;