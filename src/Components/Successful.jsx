import React, { useEffect, useState } from 'react';
import '../Styles/Successful.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Successful = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fullData = JSON.parse(localStorage.getItem('fullData'));
    if (fullData?.firstName) {
      setUserName(fullData.firstName);
    }
  }, []);

  return (
    <div className='success'>
      <div className="container">
        <div className="hero">
          <FontAwesomeIcon icon={faXmark} className="close-icon" onClick={() => navigate(-1)} />
        </div>
      </div>
      <div className='contain'>
        <h3>You are successfully registered{userName ? `, ${userName}` : ''}!</h3>
        <button onClick={() => navigate('/Login')}>Go to Login</button>
      </div>
    </div>
  );
};

export default Successful;
