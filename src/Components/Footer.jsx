import React from 'react'
import '../Styles/Footer.scss'
const Footer = () => {
  return (
    <div className='Footer'>
      <form>
        <label className='label'>
          <div className='input'>
            <input type='checkbox' className='box'/>
          </div>
          <p>send me news and promotions</p>
        </label>
      </form>
      <h4>By continuing i agree with the <a>Terms & conditions</a>,<a>Privacy.</a></h4>
    </div>
  )
}

export default Footer
