import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Nav1.scss';

const Nav1 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  return (
    <div className="nav-container">
      <ul className="nav-tabs">
        <li>
          <Link
            to="/"
            className={currentPath === '/' ? 'active' : ''}
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/Login"
            className={currentPath === '/Login' ? 'active' : ''}
          >
            Login
          </Link>
        </li>
      </ul>
      <span className="close-icon" onClick={() => navigate(-1)}>×</span>
    </div>
  );
};

export default Nav1;
