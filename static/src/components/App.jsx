import React, { Component, PropTypes } from 'react';
import Lists from './Lists/Lists';
import MainLayout from '../layouts/MainLayout/MainLayout';

const App = ({ location }) => {
  return (
    <MainLayout>
        <Lists />
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
