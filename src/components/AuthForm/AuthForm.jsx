import React from 'react';
import { Div, Form, InputLine, Btn } from './AuthForm.styled';

const AuthForm = () => {
  return (
    <>
      <Div>
        <h1>Login</h1>
        <Form>
          <InputLine
            id="email"
            placeholder="Email"
            variant="outlined"
            name="email"
            type="email"
            autoComplete="off"
            required
          />
          <InputLine
            id="password"
            placeholder="Password"
            variant="outlined"
            name="password"
            autoComplete="off"
            required
            // endAdornment={
            //   <IconButton>
            //     <VisibilityOffIcon />
            //   </IconButton>
            // }
          />
          <Btn type="submit">Login</Btn>
        </Form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </Div>

      <Div>
        <h1>Registration</h1>
        <Form>
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
          <InputContainer>
            <InputLine
              id="confirmPassword"
              placeholder="Confirm password"
              variant="outlined"
              name="confirm-password"
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
          <Btn type="submit" color="primary">
            Registration
          </Btn>
        </Form>
        <p>
          Already have an account? <a href="/register">Login</a>
        </p>
      </Div>
    </>
  );
};

export default AuthForm;
