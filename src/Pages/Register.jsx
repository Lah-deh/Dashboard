import React from 'react'
import RegisterHero from '../Components/RegisterHero'
import RegisterForm from '../Formik/RegisterForm'
import Nav1 from '../Components/Nav1'
import Footer from '../Components/Footer'
const Register = () => {
  return (
    <div>
      <Nav1/>
      <RegisterHero />
      <RegisterForm/>
      <Footer/>
    </div>
  )
}

export default Register
