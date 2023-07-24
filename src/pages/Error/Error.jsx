import React from 'react';
// import { Pawprint } from 'utils/icons';
import { Button, Container, Text, Image } from './Error.styled';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <>
      <Container>
        <Text>Ooops! This page not found :(</Text>
        <Image></Image>
        <Button>
          <Link to="/">To main page</Link>
        </Button>
      </Container>
    </>
  );
};

export default Error;
