import React from 'react';
import '../Styles/Content.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';
import cos from '../assets/Images/cos.png';
import mem from '../assets/Images/member.png';
import act from '../assets/Images/active.svg';

const Content = () => {
  const stats = [
    { title: 'Total Customers', value: 5423, img: cos, trend: '+16%', direction: 'up' },
    { title: 'Members', value: 1893, img: mem, trend: '-1%', direction: 'down' },
    { title: 'Active Now', value: 189, img: act },
  ];

  return (
    <div className="dashboard-content">
      <div className="cards">
        {stats.map((item, index) => (
          <div className="card" key={index}>
            <div className="icon-wrapper">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="card-info">
              <p className="title">{item.title}</p>
              <h3>{item.value.toLocaleString()}</h3>
              {item.trend && (
                <span className={`trend ${item.direction}`}>
                  <FontAwesomeIcon icon={item.direction === 'up' ? faArrowTrendUp : faArrowTrendDown} />
                  {item.trend} this month
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
