import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginForm.scss';

const LoginForm = () => {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is rwequired'),
    password: Yup.string().required(' Password is required'),
    rememberMe: Yup.boolean(),
  });

  const remembered = JSON.parse(localStorage.getItem('rememberedCredentials'));

  return (
    <Formik
      initialValues={{
        email: remembered?.email || '',
        password: remembered?.password || '',
        rememberMe: remembered ? true : false,
      }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        const fullData = JSON.parse(localStorage.getItem('fullData'));

        if (
          fullData &&
          values.email === fullData.email &&
          values.password === fullData.password
        ) {
          if (values.rememberMe) {
            localStorage.setItem(
              'rememberedCredentials',
              JSON.stringify({
                email: values.email,
                password: values.password,
              })
            );
          } else {
            localStorage.removeItem('rememberedCredentials');
          }
          localStorage.setItem('isLoggedIn', 'true');
          alert('Login successful!');
          navigate('/Dashboard');


          
        } else {
          setErrors({ email: 'Invalid email or password' });
        }

        setSubmitting(false);
      }}
    >
      <Form>
        <div>
          <Field name="email" type="email" placeholder="Email address" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        
        <button type="submit">Login to Dashboard</button>
        <div className='contain'>
          <label>
            <Field type="checkbox" name="rememberMe" className='box' />
            Remember Me
          </label>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
