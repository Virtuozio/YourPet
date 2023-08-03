import * as Yup from 'yup';

const phoneRegExp = /^(\+380\d{9})$/;

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed().required('File is required'),
  name: Yup.string().required('Please, enter your name'),
  email: Yup.string()
    .email('Enter correct email')
    .required('Please, enter your email'),
  birthday: Yup.string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      'Correct format: dd.mm.yyyy'
    )
    .test(
      'is-date-valid',
      () => `Future date not allowed`,
      value => {
        if (value) {
          let date = value.split('.');
          const corectFormat = new Date(`${date[2]}.${date[1]}.${date[0]}`);
          return corectFormat.getTime() < Date.now();
        }
        return true;
      }
    )
    .required('Birthday is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Enter the phone number +380...')
    .required('Please, enter your phone'),
  city: Yup.string().required('Please, enter your city'),
});

export default validationSchema;
