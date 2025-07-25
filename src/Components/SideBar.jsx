import React, { useState, useEffect } from 'react';

import Logo from '../assets/Images/dash.png';
import dash from '../assets/Images/dashboard.png';
import products from '../assets/Images/product.png';
import customers from '../assets/Images/customers.png';
import income from '../assets/Images/income.png';
import promote from '../assets/Images/promote.png';
import help from '../assets/Images/help.png';
import profile from '../assets/Images/profile.png';
import '../Styles/Bar.scss';

const SideBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navItems = [
    { icon: dash, text: 'Dashboard' },
    { icon: products, text: 'Products' },
    { icon: customers, text: 'Customers' },
    { icon: income, text: 'Income' },
    { icon: promote, text: 'Promote' },
    { icon: help, text: 'Help' },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); // reset on resize
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const handleNavigate = (text) => {
    if (!isMobile && text === 'Dashboard') setIsOpen(prev => !prev);
    if (isMobile) setIsOpen(false);
  };

  return (
    <>
      {isMobile && (
        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>
      )}
      <div className={`SideBar ${isOpen ? 'open' : ''} ${!isMobile && !isOpen ? 'collapsed' : ''}`}>
        <div className="top" onClick={() => handleNavigate('Dashboard')}>
          <img src={Logo} alt="Logo" />
          <h3 className="title">Dashboard</h3>
        </div>
        <ul className="nav">
          {navItems.map((item) => (
            <li
              key={item.text}
              onClick={() => handleNavigate(item.text)}
              className={item.text === 'Customers' ? 'active' : ''}
            >
              <img src={item.icon} alt={item.text} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="profile">
          <img src={profile} alt="Profile" />
          <div className="info">
            <p>Evano</p>
            <small>Project Manager</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
