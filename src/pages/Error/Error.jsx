import React from 'react';
// import { Pawprint } from 'utils/icons';
import { Button, Container, Text, ErrorBackgr } from './Error.styled';

const Error = () => {
  return (
    <>
      <Container>
        <Text>Ooops! This page not found :(</Text>
        <ErrorBackgr></ErrorBackgr>
        <Button href="./">To main page</Button>
      </Container>
    </>
  );
};

export default Error;
