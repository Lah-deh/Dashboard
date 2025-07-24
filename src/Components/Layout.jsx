import React from 'react';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Overview from '../Components/Overview';
import '../Styles/Dashboard.scss';

const Layout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <SideBar />
      <div className="main-content">
        <Header />
        <Content />
        <Overview/>
        {children}
      </div>
    </div>
  );
};

export default Layout;
