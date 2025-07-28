import React from 'react';
import '../Styles/RegisterForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const registerSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should be at least 8 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*-_=+(){};:'"?/])/,
      'Password must contain at least one special character and a capital letter'
    ),
});

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={registerSchema}
      onSubmit={ (values) => {
        localStorage.setItem('fullData', JSON.stringify(values));
        navigate('/Personal'); 
        
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label><br /><br />
          <div className="input">
            <Field name="email" type="email" /><br />
          </div>
          <ErrorMessage name="email" component="div" className="error" />

          <label htmlFor="password">Password</label><br /><br />
          <div className="input">
            <Field name="password" type="password" /><br />
          </div>
          <p className='paa'>8+ character</p>
          <ErrorMessage name="password" component="div" className="error" />

          <button type="submit" className="buttonn">Create Account</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
