import * as Yup from 'yup';



const validationLogInSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
});
  

export default validationLogInSchema;