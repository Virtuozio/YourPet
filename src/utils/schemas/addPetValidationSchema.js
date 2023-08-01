import { SELL, YOUR_PET } from 'utils/constants/typesAddPet';
import * as yup from 'yup';

const fullFildsAddPetSchema = yup.object().shape({
  category: yup.string().required('Category is required'),
  title: yup.string().when('category', {
    is: value => value !== YOUR_PET,
    then: yup.string().required('Title is required'),
  }),
  name: yup
    .string()
    .min(2, 'Too short value')
    .max(16, 'Too long value, 16 symbols')
    .matches(/^\p{L}+$/u, 'Only letters')
    .required('Name is required'),
  date: yup.string().required('Birthday is required'),
  type: yup
    .string()
    .min(2, 'Too short value')
    .max(16, 'Too long value, 16 symbols')
    .matches(/^\p{L}+$/u, 'Only letters')
    .required('Type is required'),
  file: yup
    .mixed()
    .required('File is required')
    .test('fileType', 'Invalid file type', value => {
      return value instanceof File;
    }),
  sex: yup.string().when('category', {
    is: value => value !== YOUR_PET,
    then: yup.string().required('Choose sex of pet'),
  }),
  location: yup.string().when('category', {
    is: value => value !== YOUR_PET,
    then: yup.string().required('Location is required'),
  }),
  price: yup.number().when('category', {
    is: SELL,
    then: yup
      .number()
      .positive('Should be a positive value')
      .required('Price is required'),
  }),
  comments: yup.string().max(120, 'Too long comment'),
});

const categoryValidation = yup.object().shape({
  category: yup.string().required('Category is required'),
});

const secValidYourPet = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too short value')
    .max(16, 'Too long value, 16 symbols')
    .matches(/^\p{L}+$/u, 'Only letters')
    .required('Name is required'),
  date: yup.string().required('Birthday is required'),
  type: yup
    .string()
    .min(2, 'Too short value')
    .max(16, 'Too long value, 16 symbols')
    .matches(/^\p{L}+$/u, 'Only letters')
    .required('Type is required'),
});

const secValidNoYours = yup.object().shape({
  title: yup.string().required('Title is required'),
  name: yup
    .string()
    .min(2, 'Too short value')
    .max(16, 'Too long value, 16 symbols')
    .matches(/^\p{L}+$/u, 'Only letters')
    .required('Name is required'),
  date: yup.string().required('Birthday is required'),
  type: yup
    .string()
    .min(2, 'Too short value')
    .max(16, 'Too long value, 16 symbols')
    .matches(/^\p{L}+$/u, 'Only letters')
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
  fullFildsAddPetSchema,
  categoryValidation,
  secValidYourPet,
  thirdValidYourPet,
  secValidNoYours,
  thirdValidSell,
  thirdValidLostFoundAndGoodHands,
};

export default validationAddPetSchema;
