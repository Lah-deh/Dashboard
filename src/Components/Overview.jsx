import React from 'react';
import '../Styles/Overview.scss';

const Overview = () => {
  const customers = [
    { name: 'John Doe', email: 'john@example.com', status: 'Active', joinDate: '2023-05-10' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', joinDate: '2023-04-15' },
    { name: 'Samuel Lee', email: 'samuel@example.com', status: 'Active', joinDate: '2023-06-01' },
  ];

  return (
    <div className="customer-overview">
      <h3>Customer Overview</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust, index) => (
            <tr key={index}>
              <td>{cust.name}</td>
              <td>{cust.email}</td>
              
              <td>{cust.joinDate}</td>
              <td>
                <span className={cust.status === 'Active' ? 'status active' : 'status inactive'}>
                  {cust.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
