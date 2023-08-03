import React from 'react';
import { useFormikContext } from 'formik';
import { useState } from 'react';

import {
  MdOutlineVisibilityOff,
  MdOutlineVisibility,
  MdOutlineDone,
} from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

import {
  Div,
  StyledForm,
  InputLine,
  InputContainer,
  Icon,
  IconValid,
  IconName,
  IconEmail,
  Btn,
  Error,
} from './AuthForm.styled';

const AuthForm = ({ values, errors, touched }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const formik = useFormikContext();

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevShowConfirmPassword => !prevShowConfirmPassword);
  };

  const onNameChange = e => {
    const nameValue = e.target.value;
    setName(nameValue);
    formik.setFieldValue('name', nameValue);
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
  };

  const onConfirmPasswordChange = e => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    formik.setFieldValue('confirmPassword', confirmPasswordValue);
  };

  return (
    <>
      <Div>
        <h1>Registration</h1>
        <StyledForm>
          <InputContainer>
            <InputLine
              id="name"
              placeholder="Name"
              variant="outlined"
              name="name"
              type="name"
              autoComplete="off"
              required
              onChange={onNameChange}
              value={name}
              error={formik.touched.name && formik.errors.name}
            />
            <IconName nameValue={name.length}>
              {formik.touched.name && formik.errors.name ? (
                <IconValid valid={false} passwordValue={name.length}>
                  <RxCross2 style={{ color: 'rgba(255, 99, 71, 1)' }} />
                </IconValid>
              ) : (
                <IconValid valid passwordValue={name.length}>
                  <MdOutlineDone />
                </IconValid>
              )}
            </IconName>
            <Error name="name" component="span" />
          </InputContainer>

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
            />
            <Icon
              onClick={togglePasswordVisibility}
              style={{
                width: '24px',
                height: '24px',
              }}
              passwordValue={password}
              error={formik.touched.password && formik.errors.password}
            >
              {showPassword ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </Icon>
            {formik.touched.password && formik.errors.password ? (
              <IconValid valid={false} passwordValue={password.length}>
                <RxCross2 style={{ color: 'rgba(255, 99, 71, 1)' }} />
              </IconValid>
            ) : (
              <IconValid valid passwordValue={password.length}>
                <MdOutlineDone />
              </IconValid>
            )}
            <Error name="password" component="span" />
          </InputContainer>

          <InputContainer>
            <InputLine
              id="confirmPassword"
              placeholder="Confirm password"
              variant="outlined"
              name="confirmPassword"
              autoComplete="off"
              type={showConfirmPassword ? 'text' : 'password'}
              required
              onChange={onConfirmPasswordChange}
              value={confirmPassword}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            <Icon
              onClick={toggleConfirmPasswordVisibility}
              style={{
                width: '24px',
                height: '24px',
              }}
              passwordValue={confirmPassword}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            >
              {showConfirmPassword ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </Icon>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <IconValid valid={false} passwordValue={confirmPassword.length}>
                <RxCross2 style={{ color: 'rgba(255, 99, 71, 1)' }} />
              </IconValid>
            ) : (
              <IconValid valid passwordValue={confirmPassword.length}>
                <MdOutlineDone />
              </IconValid>
            )}
            <Error name="confirmPassword" component="span" />
          </InputContainer>

          <Btn type="submit" color="primary">
            Registration
          </Btn>
        </StyledForm>
        <p>
          Already have an account? <a href="/YourPet/login">Login</a>
        </p>
      </Div>
    </>
  );
};

export default AuthForm;
