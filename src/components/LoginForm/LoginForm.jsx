import React from 'react';
import { useState } from 'react';
import { useFormikContext } from 'formik';

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
  const formik = useFormikContext();
  const valid = formik.touched.password && !formik.errors.password;

  const validateIcon = (touched, errors, values, fieldName) => {
    const valid = touched[fieldName] && !errors[fieldName];

    if (touched[fieldName] && errors[fieldName]) {
      return (
        <IconValid valid={false}>
          <RxCross2 style={{ color: 'rgba(255, 99, 71, 1)' }} />
        </IconValid>
      );
    } else if (valid) {
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
              valid={formik.touched.email && !formik.errors.email}
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
              error={formik.touched.password && formik.errors.password}
              valid={formik.touched.password && !formik.errors.password}
            />
            <Icon
              onClick={togglePasswordVisibility}
              style={{ width: '24px', height: '24px' }}
              error={formik.touched.password && formik.errors.password}
              valid={valid}
            >
              {valid ? (
                <MdOutlineDone />
              ) : showPassword ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </Icon>
            <Error name="password" component="span" />
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
