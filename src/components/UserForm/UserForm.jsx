import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'flatpickr/dist/flatpickr.min.css';
import { BsCamera } from 'react-icons/bs';
import {
  UserPhoto,
  FileInput,
  FileInputLabel,
  InputContainer,
  SubmitButton,
  Error,
} from './UserForm.styled';
import validationSchema from 'utils/validationSchema';

const initialValues = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const UserForm = ({ closeModal }) => {
  const [image, setImage] = useState();

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    closeModal();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <UserPhoto src={image} />
        <div>
          <FileInputLabel htmlFor="file">
            <BsCamera />
            Edit photo
          </FileInputLabel>
          <FileInput
            type="file"
            id="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <InputContainer>
          <label htmlFor="name">Name:</label>
          <Field type="text" name="name" placeholder="Kate" />
          <ErrorMessage name="name" component={Error} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" placeholder="Kate@mail.com" />
          <ErrorMessage name="email" component={Error} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="birthday">Birthday:</label>
          <Field name="birthday" type="text" placeholder="dd.mm.yyyy" />
          <ErrorMessage name="birthday" component={Error} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="phone">Phone:</label>
          <Field type="tel" name="phone" placeholder="+380..." />
          <ErrorMessage name="phone" component={Error} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="city">City:</label>
          <Field type="text" name="city" placeholder="Ternopil" />
          <ErrorMessage name="city" component={Error} />
        </InputContainer>
        <SubmitButton type="submit">Save</SubmitButton>
      </Form>
    </Formik>
  );
};

export default UserForm;
