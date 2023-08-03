import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
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
  Text,
} from './UserForm.styled';
import validationSchema from 'utils/schemas/validationSchema';
import defaultImg from 'assets/Photo default.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  // currentUser,
  updateUserData,
} from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { selectIsLoading } from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';

const UserForm = ({ disabled }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const loading = useSelector(selectIsLoading);

  const [errorsVisible, setErrorsVisible] = useState(true);
  const [preview, setPreview] = useState();
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);

  const initialValues = {
    avatar: currentUser.avatarURL,
    name: currentUser.name,
    email: currentUser.email,
    birthday: currentUser.birthday,
    phone: currentUser.phone,
    city: currentUser.city,
  };
  const formikProps = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log('values', formikProps.values);
      if (Object.keys(formikProps.errors).length === 0) {
        const formData = new FormData();
        for (let key in values) {
          formData.append(`${key}`, values[key]);
        }
        dispatch(updateUserData(formData));
      }
    },
  });
  console.log(formikProps.values);
  const handleClose = e => {
    if (e.currentTarget.id === 'cancel') {
      setPreview();

      const fileInput = document.getElementById('file');
      if (fileInput) {
        fileInput.value = '';
      }
    }
    setShowConfirm(false);
  };

  useEffect(() => {
    if (!disabled) {
      setErrorsVisible(true);
    } else {
      setPreview();
    }
  }, [disabled]);

  const handleFileChange = e => {
    formikProps.setFieldValue('avatarURL', e.currentTarget.files[0]);
    setPreview(URL.createObjectURL(e.currentTarget.files[0]));
    setShowConfirm(true);
  };

  return (
    <>
      {user && (
        <form onSubmit={formikProps.handleSubmit}>
          <StyledForm>
            <div>
              {disabled ? (
                <UserPhoto src={user.avatarURL ? user.avatarURL : defaultImg} />
              ) : (
                <UserPhoto src={preview ? preview : user.avatarURL} />
              )}

              {!disabled && !showConfirm && (
                <div style={{ marginTop: '15px' }}>
                  <FileInputLabel htmlFor="file">
                    <BsCamera />
                    Edit photo
                  </FileInputLabel>
                  <FileInput
                    type="file"
                    name="avatar"
                    id="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              )}
              {showConfirm && !disabled && (
                <div
                  style={{
                    marginTop: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <BsCheckLg
                    id="confirm"
                    style={{ fill: '#54ADFF', width: '24px', height: '24px' }}
                    onClick={handleClose}
                  />
                  <Text>Confirm</Text>
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
                <input
                  type="text"
                  name="name"
                  value={formikProps.values.name}
                  placeholder="Kate"
                  disabled={disabled}
                  onChange={formikProps.handleChange}
                />
                {formikProps.errors.name && errorsVisible && (
                  <Error>{formikProps.errors.name}</Error>
                )}
              </InputContainer>
              <InputContainer>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formikProps.values.email}
                  placeholder="Kate@mail.com"
                  disabled={disabled}
                  onChange={formikProps.handleChange}
                />
                {formikProps.errors.email && errorsVisible && (
                  <Error>{formikProps.errors.email}</Error>
                )}
              </InputContainer>
              <InputContainer>
                <label htmlFor="birthday">Birthday:</label>
                <input
                  name="birthday"
                  type="text"
                  value={formikProps.values.birthday}
                  placeholder="dd.mm.yyyy"
                  disabled={disabled}
                  onChange={formikProps.handleChange}
                />
                {formikProps.errors.birthday && errorsVisible && (
                  <Error>{formikProps.errors.birthday}</Error>
                )}
              </InputContainer>
              <InputContainer>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formikProps.values.phone}
                  placeholder="+380..."
                  disabled={disabled}
                  onChange={formikProps.handleChange}
                />
                {formikProps.errors.phone && errorsVisible && (
                  <Error>{formikProps.errors.phone}</Error>
                )}
              </InputContainer>
              <InputContainer>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  name="city"
                  value={formikProps.values.city}
                  placeholder="Ternopil"
                  disabled={disabled}
                  onChange={formikProps.handleChange}
                />
                {formikProps.errors.city && errorsVisible && (
                  <Error>{formikProps.errors.city}</Error>
                )}
              </InputContainer>
              {!disabled && (
                <SubmitButton type="submit" disabled={showConfirm}>
                  Save
                </SubmitButton>
              )}
            </FieldsContainer>
          </StyledForm>
        </form>
      )}

      {loading && <Loader />}
    </>
  );
};

export default UserForm;
