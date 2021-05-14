import * as yup from 'yup';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; // eslint-disable-line

export const authForm = yup.object().shape({
  email: yup.string().required('Enter valid email'),
  password: yup.string().required('Password is required'),
});
