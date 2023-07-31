import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router';

import {
  Div,
  StyledForm,
  InputLine,
  InputContainer,
  Icon,
  Btn,
  Error,
} from './LoginForm.styled';

import {
  MdOutlineVisibilityOff,
  MdOutlineVisibility,
  // MdOutlineDone,
  // RxCross2,
} from 'react-icons/md';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

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

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     logIn({
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
        <h1>Login</h1>
        <Formik
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
              <Error name="email" component="span" />
            </InputContainer>
            <Btn type="submit">Login</Btn>
          </StyledForm>
        </Formik>
        <p>
          Don't have an account? <a href="/YourPet/register">Register</a>
        </p>
      </Div>
    </>
  );
};

export default LoginForm;
