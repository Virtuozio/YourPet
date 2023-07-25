import React from 'react';
import { Div, Form, InputLine, Btn } from './AuthForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const AuthForm = () => {
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
  };
  return (
    <>
      <Div>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
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
          />
          <InputLine
            id="confirmPassword"
            placeholder="Confirm password"
            variant="outlined"
            name="confirm-password"
            autoComplete="off"
            required
            // endAdornment={
            //   <InputAdornment position="end">
            //     <IconButton edge="end"></IconButton>
            //   </InputAdornment>
            // }
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
