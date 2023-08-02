import * as Yup from 'yup';

const validationRegistrationSchema = Yup.object({
  name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'",
      })
      .required('Required'),
    email: Yup.string().email('Enter a valid Email').required('Please, enter your email'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
});
  
export default validationRegistrationSchema;