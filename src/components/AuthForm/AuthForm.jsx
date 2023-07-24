import React from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Div, Form, InputLine, Btn } from './AuthForm.styled';

const AuthForm = () => {
  return (
    <>
      <Div>
        <h1>Login</h1>
        <Form>
          <InputLine
            id="name"
            placeholder="Name"
            variant="outlined"
            name="name"
            autoComplete="off"
            required
          />
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
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end"></IconButton>
              </InputAdornment>
            }
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
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end"></IconButton>
              </InputAdornment>
            }
          />
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
