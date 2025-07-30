import React from 'react'
import '../Styles/Manually.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';



const manuallySchema = Yup.object().shape({
  street: Yup.string().required('Street is required'),
  apartment: Yup.string().optional(),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip: Yup.string().required('Zip code is required'),
});
const Manually = () => {
    const navigate = useNavigate();
  return (
    <Formik
       initialValues={{ street: '',apartment:'', city: '', state: '', zip: '' }}
       validationSchema={manuallySchema}
       onSubmit={(values) => {
        const prevData = JSON.parse(localStorage.getItem('fullData')) || {};
        const updatedData = {
            ...prevData,
            address: {
            street: values.street,
            apartment: values.apartment,
            city: values.city,
            state: values.state,
            zip: values.zip,
           },
        };
        localStorage.setItem('fullData', JSON.stringify(updatedData));
        console.log('Final registration data:', updatedData);
        navigate('/Success');



       }}
    >
        <Form className='for'>
            <div>
                <Field name="street" placeholder="Street address" />
                <ErrorMessage name="street" component="div" className="error" />
            </div>
            <div >
                <Field name="apartment" placeholder="Apartment " />
                <ErrorMessage name="apartment" component="div" className="error" />
            </div>
            <div>
                <Field name="city" placeholder="City" />
                <ErrorMessage name="city" component="div" className="error" />
            </div>
            <div className='statee'>
                <div>
                    <Field name="state" placeholder="State" />
                    <ErrorMessage name="state" component="div" className="error" />
                </div>
                <div>
                    <Field name="zip" placeholder="Zip code" />
                    <ErrorMessage name="zip" component="div" className="error" />
                </div>
            </div>
            <button type="submit">Save Information</button>

        </Form>

    </Formik>
  )
}

export default Manually
