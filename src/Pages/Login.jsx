import React from 'react'
import Nav1 from '../Components/Nav1'
import RegisterHero from '../Components/RegisterHero'
import LoginForm from '../Formik/LoginForm'

const Login = () => {
  return (
    <div>
      <Nav1 />
      <RegisterHero />
      <LoginForm/>
    </div>
  )
}

export default Login
