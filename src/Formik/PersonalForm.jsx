import React from 'react'
import '../Styles/PersonalFrom.scss'
import { useNavigate } from 'react-router-dom';
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';










const personalSchema = Yup.object().shape({
    Fullname: Yup.string().required('Fullname is required'),
    gender: Yup.string().required("Gender is required").oneOf(['Male','Female'], 'selct male or female'),
    PhoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]{10,}$/, 'Phone number must be at least 10 digits'),
    Birthday: Yup.date().nullable().typeError('Invalid date'),

})
const PersonalForm = () => {
    const navigate = useNavigate();
  return (
    <Formik
    initialValues={{Fullname:'',gender:'',PhoneNumber:'', Birthday:''}}
    validationSchema={personalSchema}
    onSubmit={(values)=>{
        const prevData = JSON.parse(localStorage.getItem('fullData')) || {};
        const updatedData = { ...prevData, ...values };
        localStorage.setItem('fullData', JSON.stringify(updatedData));
        navigate('/Address1');




    }}
    >
        {({handleSubmit,setFieldValue,values})=>(
            <Form onSubmit={handleSubmit} className='pers'>
                <div className='inputt'>
                    <Field name = 'Fullname' type ="text" placeholder= 'Fullname'/>
                </div>
                <ErrorMessage name='Fullname' component='div' className='error'/>

                <div className='labels'>
                    <label htmlFor='gender' className='hi'>Gender:</label>
                    <label className='labelin'>
                        <Field type="radio" name="gender" value="Male" />
                        <span>Male</span>
                    </label>
                    <label className='labelin'>
                        <Field type="radio" name="gender" value="Female" />
                        <span>Female</span>
                    </label>
                </div>
                <ErrorMessage name='gender' component='div' className='error'/>

                <div className='visible'>
                    <FontAwesomeIcon icon={faCircleExclamation} className='bad' />
                    <p>The phone number and birthday are only visible to you</p>
                </div>
                <div className='number'>
                    <PhoneInput
                        country={'ng'}
                        inputProps={{
                            name: 'PhoneNumber',
                            required: true,
                        }}
                        onChange={phone => setFieldValue('PhoneNumber', phone)}
                        value={values.PhoneNumber}
                        inputClass="custom-phone-input"  

                    />
                    <ErrorMessage name='PhoneNumber' component='div' className='error'/>

                </div>
                <div className='date'>
                    <DatePicker
                        selected={values.Birthday}
                        onChange={(date) => setFieldValue('Birthday', date)}
                        placeholderText=" Birthday"
                        dateFormat="dd/MM/yyyy"
                        className="datepicker"
                    />
                    <ErrorMessage name='Birthday' component='div' className='error'/>
                </div>
                <p className='bat'>Let us know aboutyour birthday so as not to miss a gift</p>
                <button type="submit" className='buttonn'>Save Information</button>
            </Form>
        )}
    </Formik>
  )
}

export default PersonalForm
