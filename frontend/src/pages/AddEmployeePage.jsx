// src/pages/AddEmployeePage.js
import React from 'react';
import EmployeeForm from '../components/EmployeeForm';

const AddEmployeePage = () => {
  return (
    <div>
      <h2>Add a New Employee</h2>
      <EmployeeForm onSuccess={() => alert('Employee added!')} />
    </div>
  );
};

export default AddEmployeePage;
