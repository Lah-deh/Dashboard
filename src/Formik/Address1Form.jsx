import React from 'react';
import '../Styles/Address1Form.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import people from '../assets/Images/people.png'
import time from '../assets/Images/time.png'
import money from '../assets/Images/money.png'





const address1Schema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
});

const Address1Form = () => {
  const navigate = useNavigate();
  

  const handleUseLocation = (setFieldValue) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
          setFieldValue('address', coords);
          
        },
        () => {
          alert("Failed to retrieve location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <Formik
      initialValues={{ address: '' }}
      validationSchema={address1Schema}
      onSubmit={(values) => {
        const prevData = JSON.parse(localStorage.getItem('fullData')) || {};
        const updatedData = { ...prevData, address: values.address };
        localStorage.setItem('fullData', JSON.stringify(updatedData));
        navigate('/Success');




      }}
    >
      {({ handleSubmit, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <div className='form'>
            <Field name="address" placeholder="Search for address" />
            <ErrorMessage name="address" component="div" className="error" />
          </div>
          <p className='you'>Your address is not visible to other users</p>

          <div className='buttons'>
            <button
              type="button"
              onClick={() => handleUseLocation(setFieldValue)}
            >
              Use current location
            </button>

            <button
              type="button"
              onClick={() => {
                
                setFieldValue('address', '');
                navigate('/Address2')
              }}
            >
              Add manually
            </button>
          </div>

          <div className="info">
            <h3>Sharing your address shows:</h3>
            <div className='inner'>
              <img src={people}/>
              <p>People near you </p>
            </div>
            <div className='inner'>
              <img src={time}/>
              <p>Estimated delivery time</p>
            </div>
            <div className='inner'>
              <img src={money}/>
              <p>Estimate shipping costs</p>
            </div>
            <button type="submit">Save Information</button>
          </div>

          
        </Form>
      )}
    </Formik>
  );
};

export default Address1Form;
