import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'flatpickr/dist/flatpickr.min.css';
import { BsCamera, BsCheckLg, BsX } from 'react-icons/bs';
import {
  StyledForm,
  UserPhoto,
  FileInput,
  FileInputLabel,
  InputContainer,
  SubmitButton,
  Error,
  FieldsContainer,
} from './UserForm.styled';
import validationSchema from 'utils/schemas/validationSchema';
import defaultImg from '../../utils/Photo default.jpg';
import { useDispatch } from 'react-redux';
import {
  // currentUser,
  updateUserData,
} from 'redux/auth/authOperations';
// import { FormInput } from 'components/AddPetForm/AddPetForm.styled';

const UserForm = ({ disabled, confirmClose, showConfirm, user }) => {
  const dispatch = useDispatch();
  // const { user } = useAuth();
  const [errorsVisible, setErrorsVisible] = useState(true);
  const [image, setImage] = useState();
  console.log(user);
  const initialValues = {
    avatar: user ? user.avatarURL : '',
    name: user ? user.name : '',
    email: user ? user.email : '',
    birthday: user ? user.birthday : '',
    phone: user ? user.phone : '',
    city: user ? user.city : '',
  };

  const handleClose = useCallback(
    e => {
      if (e.target.id === 'confirm') {
        setImage();
        confirmClose(true);
        setErrorsVisible(false);
      } else if (e.target.id === 'cancel') {
        confirmClose(false);
      }
    },
    [confirmClose]
  );

  useEffect(() => {
    if (!disabled) {
      setErrorsVisible(true);
    }
  }, [disabled]);

  // useEffect(() => {
  //   if (initialValues.avatar) {
  //     setImage(initialValues.avatar);
  //   }
  // }, [initialValues.avatar]);

  const handleFileChange = e => {
    const img = e.currentTarget.files[0];
    const avatarUrl = URL.createObjectURL(img);
    setImage(avatarUrl);
  };

  const handleSubmit = values => {
    let formData = new FormData();

    for (const key in values) {
      formData.append(`${key}`, values[key]);
    }
    dispatch(updateUserData(formData));
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <StyledForm>
          <div>
            {disabled ? (
              <UserPhoto src={user.avatarURL ? user.avatarURL : defaultImg} />
            ) : (
              <UserPhoto src={image ? image : user.avatarURL} />
            )}

            {!disabled && !showConfirm && (
              <div style={{ marginTop: '15px' }}>
                <FileInputLabel htmlFor="file">
                  <BsCamera />
                  Edit photo
                </FileInputLabel>
                <FileInput
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            )}
            {showConfirm && (
              <div
                style={{
                  marginTop: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <BsCheckLg
                  id="confirm"
                  style={{ fill: '#54ADFF', width: '24px', height: '24px' }}
                  onClick={handleClose}
                />
                <BsX
                  id="cancel"
                  style={{ fill: '#F43F5E', width: '24px', height: '24px' }}
                  onClick={handleClose}
                />
              </div>
            )}
          </div>
          <FieldsContainer>
            <InputContainer>
              <label htmlFor="name">Name:</label>
              <Field
                type="text"
                name="name"
                placeholder="Kate"
                disabled={disabled}
              />
              {errorsVisible && <ErrorMessage name="name" component={Error} />}
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                placeholder="Kate@mail.com"
                disabled={disabled}
              />
              {errorsVisible && <ErrorMessage name="email" component={Error} />}
            </InputContainer>
            <InputContainer>
              <label htmlFor="birthday">Birthday:</label>
              <Field
                name="birthday"
                type="text"
                placeholder="dd.mm.yyyy"
                disabled={disabled}
              />
              {errorsVisible && (
                <ErrorMessage name="birthday" component={Error} />
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="phone">Phone:</label>
              <Field
                type="tel"
                name="phone"
                placeholder="+380..."
                disabled={disabled}
              />
              {errorsVisible && <ErrorMessage name="phone" component={Error} />}
            </InputContainer>
            <InputContainer>
              <label htmlFor="city">City:</label>
              <Field
                type="text"
                name="city"
                placeholder="Ternopil"
                disabled={disabled}
              />
              {errorsVisible && <ErrorMessage name="city" component={Error} />}
            </InputContainer>
            {!disabled && <SubmitButton type="submit">Save</SubmitButton>}
          </FieldsContainer>
        </StyledForm>
      </Form>
    </Formik>
  );
};

export default UserForm;
