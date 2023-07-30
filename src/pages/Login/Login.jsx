import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router';
import validationLogInSchema from 'utils/schemas/logInSchema';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { email, password } = values;
      await dispatch(logIn({ email, password }));
      resetForm();
      navigate('/user');
    } catch (error) {
      console.error('Login failed:', error);
    }
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationLogInSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleSubmit }) => (
          <LoginForm
            values={values}
            errors={errors}
            touched={touched}
            onSubmit={handleSubmit}
          />
        )}
      </Formik>
    </>
  );
};

export default Login;
