import React from 'react'
import '../Styles/RegisterHero.scss'
import Apple from '../assets/Images/apple.png'
import Facebook from '../assets/Images/facebook.png'
import Goggle from '../assets/Images/goggle.png'

const RegisterHero = () => {
  return (
    <div className='RegisterHero'>
      <div className='media'>
        <img src={Apple}/>
        <img src={Facebook}/>
        <img src={Goggle}/>
      </div>
      <p>or register with email</p>
    </div>
  )
}

export default RegisterHero
