import React from 'react';

import {
  Div,
  Form,
  InputLine,
  InputContainer,
  Icon,
  Btn,
} from './LoginForm.styled';

import { useState } from 'react';

import {
  MdOutlineVisibilityOff,
  MdOutlineVisibility,
  // MdOutlineDone,
  // RxCross2,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    navigate('/user');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <>
      <Div>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
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
          </InputContainer>
          <Btn type="submit">Login</Btn>
        </Form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </Div>
    </>
  );
};

export default LoginForm;
