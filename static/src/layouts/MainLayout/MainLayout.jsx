import React, { Component, PropTypes } from 'react';
// import { Router, Route, IndexRoute, Link } from 'react-router';
import Sidebar from '../Sidebar/Sidebar.jsx';
import styles from './MainLayout.less';

const MainLayout = ({ children }) => {
  return (
    <div className="ant-col-24">
      <div className={styles.head}>
        <h1>周报管理系统</h1>
      </div>
      <div className={styles.content}>
        <div className="ant-col-6">
          <div className={styles.side}>
              <Sidebar />
          </div>
        </div>
        <div className="ant-col-18">
          {children}
        </div>
      </div>
      <div className={styles.foot}>

      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
