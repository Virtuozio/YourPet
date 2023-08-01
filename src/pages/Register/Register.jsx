import AuthForm from 'components/AuthForm/AuthForm';
import { Formik } from 'formik';
import { register } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
import validationRegistrationSchema from 'utils/schemas/registrationSchema';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { name, email, password } = values;
      await dispatch(register({ name, email, password }));

      // navigate('/user');
      resetForm();
    } catch (error) {
      console.error('Registration failed:', error);
    }
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationRegistrationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <AuthForm
          values={values}
          errors={errors}
          touched={touched}
          onSubmit={handleSubmit}
        />
      )}
    </Formik>
  );
};

export default Register;
