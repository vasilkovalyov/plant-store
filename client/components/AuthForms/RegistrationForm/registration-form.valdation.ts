import * as yup from 'yup';

export default yup.object().shape({
  FirstName: yup.string().required('FirstName is required'),
  LastName: yup.string().required('LastName is required'),
  Email: yup.string().email('Wrong email').required('Email is required'),
  Password: yup.string().required('Password is required'),
});
