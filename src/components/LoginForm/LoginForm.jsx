import React from 'react';
import { useState } from 'react';
import { useFormikContext } from 'formik';

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/authOperations';
// import { useNavigate } from 'react-router';

import {
  Div,
  StyledForm,
  InputLine,
  InputContainer,
  Icon,
  IconValid,
  Btn,
  Error,
} from './LoginForm.styled';

import {
  MdOutlineVisibilityOff,
  MdOutlineVisibility,
  MdOutlineDone,
} from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const LoginForm = ({ values, errors, touched }) => {
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const formik = useFormikContext();

  // const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  //   try {
  //     const { email, password } = values;
  //     await dispatch(logIn({ email, password }));
  //     resetForm();
  //     navigate('/user');
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //   }
  //   setSubmitting(false);
  // };

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

  const validateIcon = (touched, errors, values, fieldName) => {
    const isValid = touched[fieldName] && !errors[fieldName];

    if (touched[fieldName] && errors[fieldName]) {
      return (
        <IconValid valid={false}>
          <RxCross2 />
        </IconValid>
      );
    } else if (isValid) {
      return (
        <IconValid valid>
          <MdOutlineDone />
        </IconValid>
      );
    } else {
      return null;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <>
      <Div>
        <h1>Login</h1>

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
              error={formik.touched.email && formik.errors.email}
            />
            {validateIcon(
              formik.touched,
              formik.errors,
              formik.values,
              'email'
            )}
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
        <p>
          Don't have an account? <a href="/YourPet/register">Register</a>
        </p>
      </Div>
    </>
  );
};

export default LoginForm;
