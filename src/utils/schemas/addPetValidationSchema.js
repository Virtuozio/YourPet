import * as yup from 'yup';

const regex =
  /^[a-zA-Z\u00C0-\u02AF\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u2DE0-\u2DFF\uA640-\uA69F\u1C80-\u1C88- ]+$/;

const categoryValidation = yup.object().shape({
  category: yup.string().required('Category is required'),
});

const secValidYourPet = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too short value')
    .max(16, 'Too long value, 16 symbols')
    .matches(regex, 'Only letters')
    .required('Name is required'),
  date: yup.string().required('Birthday is required'),
  type: yup
    .string()
    .min(2, 'Too short value')
    .max(16, 'Too long value, 16 symbols')
    .matches(regex, 'Only letters')
    .required('Type is required'),
});

const secValidNoYours = yup.object().shape({
  title: yup
    .string()
    .matches(regex, 'Only letters')
    .required('Title is required'),
  name: yup
    .string()
    .min(2, 'Too short value')
    .max(16, 'Too long value, 16 symbols')
    .matches(regex, 'Only letters')
    .required('Name is required'),
  date: yup.string().required('Birthday is required'),
  type: yup
    .string()
    .min(2, 'Too short value')
    .max(16, 'Too long value, 16 symbols')
    .matches(regex, 'Only letters')
    .required('Type is required'),
});

const thirdValidYourPet = yup.object().shape({
  file: yup
    .mixed()
    .required('File is required')
    .test('fileType', 'Invalid file type', value => {
      return value instanceof File;
    }),
  comments: yup.string().max(120, 'Too long comment'),
});

const thirdValidSell = yup.object().shape({
  file: yup
    .mixed()
    .required('File is required')
    .test('fileType', 'Invalid file type', value => {
      return value instanceof File;
    }),
  sex: yup.string().required('Choose sex of pet'),
  location: yup.string().required('Location is required'),
  price: yup
    .number()
    .positive('Should be a positive value')
    .required('Price is required'),
  comments: yup.string().max(120, 'Too long comment'),
});

const thirdValidLostFoundAndGoodHands = yup.object().shape({
  file: yup
    .mixed()
    .required('File is required')
    .test('fileType', 'Invalid file type', value => {
      return value instanceof File;
    }),
  sex: yup.string().required('Choose sex of pet'),
  location: yup.string().required('Location is required'),
  comments: yup.string().max(120, 'Too long comment'),
});

const validationAddPetSchema = {
  categoryValidation,
  secValidYourPet,
  thirdValidYourPet,
  secValidNoYours,
  thirdValidSell,
  thirdValidLostFoundAndGoodHands,
};

export default validationAddPetSchema;
