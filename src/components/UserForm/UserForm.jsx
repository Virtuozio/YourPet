import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BsCamera } from 'react-icons/bs';
import {
  UserPhoto,
  FileInput,
  FileInputLabel,
  InputContainer,
  SubmitButton,
} from './UserForm.styled';

const initialValues = {
  name: '',
  email: '',
  birthday: null,
  phone: null,
  city: '',
};
const UserForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(actions);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <UserPhoto />
        <div>
          <FileInputLabel htmlFor="file">
            <BsCamera />
            Edit photo
          </FileInputLabel>
          <FileInput type="file" id="file" />
        </div>
        <InputContainer>
          <label htmlFor="name">Name:</label>
          <Field type="text" name="name" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="birthday">Birthday:</label>
          <Field type="text" name="birthday" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="phone">Phone:</label>
          <Field type="tel" name="phone" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="city">City:</label>
          <Field type="text" name="city" />
        </InputContainer>
        <SubmitButton type="submit">Save</SubmitButton>
      </Form>
    </Formik>
  );
};

export default UserForm;
