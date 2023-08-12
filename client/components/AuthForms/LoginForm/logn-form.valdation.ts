import * as yup from 'yup';

export default yup.object().shape({
  Email: yup.string().email('Wrong email').required('Email is required'),
  Password: yup.string().required('Password is required'),
});
