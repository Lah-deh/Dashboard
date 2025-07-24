import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/Nav2.scss'

const Nav2 = () => {
    const navigate = useNavigate();
  return (
    <div className='navv'>
      <h2>Personal Information</h2>
      <p>2 of 3</p>
      <span className="close-icon" onClick={() => navigate(-1)}>×</span>
    </div>
  )
}

export default Nav2
