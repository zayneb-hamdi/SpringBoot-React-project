// src/components/EmployeeForm.js
import React, { useState } from 'react';
import axios from 'axios';


const EmployeeForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.post(`${import.meta.env.REACT_APP_API_URL}/public/app/employees`, formData)
      .then((response) => {
        onSuccess();
        setFormData({ name: '', position: '', salary: '' });
      })
      .catch((error) => console.error('Error adding employee:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Position:</label>
        <input type="text" name="position" value={formData.position} onChange={handleChange} required />
      </div>
      <div>
        <label>Salary:</label>
        <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
