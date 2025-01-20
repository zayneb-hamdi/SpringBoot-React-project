// src/pages/HomePage.js
import React from 'react';
import EmployeeList from '../components/EmployeeList';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Employee Management</h1>
      <EmployeeList />
    </div>
  );
};

export default HomePage;
