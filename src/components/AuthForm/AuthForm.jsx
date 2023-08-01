import React from 'react';
import { useFormikContext } from 'formik';
import { useState } from 'react';

import {
  Div,
  StyledForm,
  InputLine,
  InputContainer,
  Icon,
  IconValid,
  Btn,
  Error,
} from './AuthForm.styled';

import {
  MdOutlineVisibilityOff,
  MdOutlineVisibility,
  MdOutlineDone,
} from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const AuthForm = ({ values, errors, touched }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formik = useFormikContext();
  const valid = formik.touched.password && !formik.errors.password;
  const validConfirm =
    formik.touched.confirmPassword && !formik.errors.confirmPassword;

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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevShowConfirmPassword => !prevShowConfirmPassword);
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
              error={formik.touched.name && formik.errors.name}
              valid={formik.touched.name && !formik.errors.name}
            />
            {validateIcon(formik.touched, formik.errors, formik.values, 'name')}
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
          <InputContainer>
            <InputLine
              id="confirmPassword"
              placeholder="Confirm password"
              variant="outlined"
              name="confirmPassword"
              autoComplete="off"
              type={showConfirmPassword ? 'text' : 'password'}
              required
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              valid={
                formik.touched.confirmPassword && !formik.errors.confirmPassword
              }
            />
            <Icon
              onClick={toggleConfirmPasswordVisibility}
              style={{ width: '24px', height: '24px' }}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              valid={valid}
            >
              {validConfirm ? (
                <MdOutlineDone />
              ) : showConfirmPassword ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </Icon>
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
