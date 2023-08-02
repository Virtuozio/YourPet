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
  IconEmail,
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validPassword = formik.touched.password && !formik.errors.password;

  const validateIcon = (touched, errors, values, fieldName) => {
    const valid = touched[fieldName] && !errors[fieldName];

    if (touched[fieldName] && errors[fieldName]) {
      return (
        <IconValid valid={false} passwordValue={password.length}>
          <RxCross2 style={{ color: 'rgba(255, 99, 71, 1)' }} />
        </IconValid>
      );
    } else if (valid) {
      return (
        <IconValid valid passwordValue={password.length}>
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

  const onEmailChange = e => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    formik.setFieldValue('email', emailValue);
  };

  const onPasswordChange = e => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    formik.setFieldValue('password', passwordValue);
    console.log(passwordValue);
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
              onChange={onEmailChange}
              value={email}
              error={formik.touched.email && formik.errors.email}
              valid={formik.touched.email && !formik.errors.email}
            />
            <IconEmail emailValue={email.length}>
              {formik.touched.email && formik.errors.email ? (
                <IconValid valid={false} passwordValue={email.length}>
                  <RxCross2 style={{ color: 'rgba(255, 99, 71, 1)' }} />
                </IconValid>
              ) : (
                <IconValid valid passwordValue={email.length}>
                  <MdOutlineDone />
                </IconValid>
              )}
            </IconEmail>
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
              onChange={onPasswordChange}
              value={password}
              error={formik.touched.password && formik.errors.password}
              valid={validPassword}
            />
            <Icon
              onClick={togglePasswordVisibility}
              style={{
                width: '24px',
                height: '24px',
              }}
              passwordValue={password}
              error={formik.touched.password && formik.errors.password}
              valid={validPassword}
            >
              {showPassword ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </Icon>
            {validateIcon(
              formik.touched,
              formik.errors,
              formik.values,
              'password'
            )}
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
