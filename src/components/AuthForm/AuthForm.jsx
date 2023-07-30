import React from 'react';
import { Formik } from 'formik';
// import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register, logIn } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
import { useState } from 'react';

import {
  Div,
  StyledForm,
  InputLine,
  InputContainer,
  Icon,
  Btn,
  Error,
  // ErrorMessageText,
} from './AuthForm.styled';

import {
  MdOutlineVisibilityOff,
  MdOutlineVisibility,
  // MdOutlineDone,
  // RxCross2,
} from 'react-icons/md';

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { email, password } = values;
      await dispatch(register({ email, password }));
      await dispatch(logIn({ email, password }));
      // navigate('/user');
      resetForm();
    } catch (error) {
      console.error('Registration or login failed:', error);
    }
    setSubmitting(false);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     register({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  //   navigate('/user');
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <>
      <Div>
        <h1>Registration</h1>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <InputContainer>
              <InputLine
                id="email"
                placeholder="Email"
                variant="outlined"
                name="email"
                type="email"
                autoComplete="off"
                required
              />
              <Error name="email" component="span" />
            </InputContainer>
            <InputContainer>
              <InputLine
                id="password"
                placeholder="Password"
                variant="outlined"
                name="password"
                autoComplete="off"
                type={showPassword ? 'text' : 'password'}
                required
              />
              <Icon
                onClick={togglePasswordVisibility}
                style={{ width: '24px', height: '24px' }}
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff />
                ) : (
                  <MdOutlineVisibility />
                )}
              </Icon>
              <Error name="password" component="div" />
            </InputContainer>
            <InputContainer>
              <InputLine
                id="confirmPassword"
                placeholder="Confirm password"
                variant="outlined"
                name="confirmPassword"
                autoComplete="off"
                type={showPassword ? 'text' : 'password'}
                required
              />
              <Icon
                onClick={togglePasswordVisibility}
                style={{ width: '24px', height: '24px' }}
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff />
                ) : (
                  <MdOutlineVisibility />
                )}
              </Icon>
              <Error name="confirmPassword" component="div" />
            </InputContainer>
            <Btn type="submit" color="primary">
              Registration
            </Btn>
          </StyledForm>
        </Formik>
        <p>
          Already have an account? <a href="/YourPet/login">Login</a>
        </p>
      </Div>
    </>
  );
};

export default AuthForm;
