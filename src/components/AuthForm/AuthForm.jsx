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
  const formik = useFormikContext();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <h1>Registration</h1>
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
              error={formik.touched.email && formik.errors.email} // Передаємо error для показу помилки
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
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
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
        <p>
          Already have an account? <a href="/YourPet/login">Login</a>
        </p>
      </Div>
    </>
  );
};

export default AuthForm;
