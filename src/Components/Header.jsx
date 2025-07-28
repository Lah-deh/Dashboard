import React from 'react'
import '../Styles/Header.scss'

const Header = () => {
  return (
    <div className="header">
      <h2> Hello {localStorage.getItem('username') || 'User'} <span role="img" aria-label="wave">👋🏼,</span></h2>
      <div className="search-box">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  )
}

export default Header
