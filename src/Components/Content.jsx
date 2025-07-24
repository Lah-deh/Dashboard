import React from 'react';
import '../Styles/Content.scss';
import cos from '../assets/Images/cos.png';
import mem from '../assets/Images/member.png';
import act from '../assets/Images/active.svg';


const Content = () => {
  const stats = [
    { title: 'Total Customers', value: 5423, img : cos },
    { title: 'Members', value: 1893, img: mem },
    { title: 'Active now', value: 189, img: act },
    
  ];


  return (
    <div className="dashboard-content">
      
      <div className="cards">
        {stats.map((item, index) => (
          <div className="card" key={index}>
            <div>
                <img src={item.img} className="card-icon" />
            </div>
            <div>
                <h4>{item.title}</h4>
                <p>{item.value}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
