// src/components/EmployeeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import process from 'process';
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(`https://demo-app-latest-x4vw.onrender.com/public/app/employees`)
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error('Error fetching employees:', error));
  }, []);

  const handleDelete = (id) => {
    
    axios.delete(`https://demo-app-latest-x4vw.onrender.com/public/app/employees/${id}`)
      .then(() => setEmployees(employees.filter(emp => emp.id !== id)))
      .catch((error) => console.error('Error deleting employee:', error));
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
