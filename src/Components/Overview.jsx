import React from 'react';
import '../Styles/Overview.scss';

const data = [
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active',
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phone: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phone: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active',
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phone: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Active',
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phone: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive',
  },
];

const Customers = () => {
  return (
    <div className="customers-wrapper">
      <div className="customers-header">
        <div>
          <h2>All Customers</h2>
          <p className="active-members">Active Members</p>
        </div>
        <div className="customers-actions">
          <input type="text" placeholder=" Search" />
          <select className='hideee'>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th className='hide'>Company</th>
              <th className="hidee">Phone Number</th>
              <th className='hide'>Email</th>
              <th className="hidee">Country</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cust, index) => (
              <tr key={index}>
                <td>{cust.name}</td>
                <td className='hide'>{cust.company}</td>
                <td className=" hidee">{cust.phone}</td>
                <td className='hide'>{cust.email}</td>
                <td className="hidee">{cust.country}</td>
                <td>
                  <span className={`status ${cust.status.toLowerCase()}`}>
                    {cust.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <p>Showing data 1 to 8 of 256K entries</p>
        <div className="pages">
          <button>{'<'}</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <span>…</span>
          <button>40</button>
          <button>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Customers;
