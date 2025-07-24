import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`SideBar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="top" onClick={toggleSidebar}>
        <img src={Logo} className="logo" />
        {isOpen && <h3>Dashboard</h3>}
      </div>

      <ul className="nav">
        <li onClick={() => navigate('/dashboard')}>
          <img src={dash} alt="dashboard" />
          {isOpen && <span>Dashboard</span>}
        </li>
        <li onClick={() => navigate('/products')}>
          <img src={products} alt="product" />
          {isOpen && <span>Product</span>}
        </li>
        <li onClick={() => navigate('/Dashboard')} className="active" >
          <img src={customers} alt="customers" />
          {isOpen && <span>Customers</span>}
        </li>
        <li onClick={() => navigate('/income')}>
          <img src={income} alt="income" />
          {isOpen && <span>Income</span>}
        </li>
        <li onClick={() => navigate('/promote')}>
          <img src={promote} alt="promote" />
          {isOpen && <span>Promote</span>}
        </li>
        <li onClick={() => navigate('/help')}>
          <img src={help} alt="help" />
          {isOpen && <span>Help</span>}
        </li>
      </ul>

      <div className="bottom">
        <div className="profile">
          <img src={profile} alt="profile" />
          {isOpen && (
            <div>
              <h4>Evano</h4>
              <p>Project Manager</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
