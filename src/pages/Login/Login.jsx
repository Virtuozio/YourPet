import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';
import { logIn } from 'redux/auth/authOperations';

import { ModalErrorLogin } from 'components/ModalErrorLogin/ModalErrorLogin';
import LoginForm from 'components/LoginForm/LoginForm';
import Backdrop from 'components/Backdrop/Backdrop';

import validationLogInSchema from 'utils/schemas/logInSchema';

const Login = () => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const dispatch = useDispatch();
  const err = useSelector(selectError);

  useEffect(() => {
    if (err) {
      setIsErrorModalOpen(true);
    }
  }, [err]);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    setSubmitting(false);
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
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
      {isErrorModalOpen && (
        <Backdrop closeModal={closeErrorModal}>
          <ModalErrorLogin onClose={closeErrorModal} />
        </Backdrop>
      )}
    </>
  );
};

export default Login;
