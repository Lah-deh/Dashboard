import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/Nav3.scss'

const Nav3 = () => {
    const navigate = useNavigate();
  return (
    <div className='navvv'>
      <h2>Add Address</h2>
      <p>3 of 3</p>
      <span className="close-icon" onClick={() => navigate(-1)}>×</span>
    </div>
  )
}

export default Nav3
