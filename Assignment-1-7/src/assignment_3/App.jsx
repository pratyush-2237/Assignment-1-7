import React, { useState } from "react";
import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Pratyush Dutta",
      employeeId: "EMP001",
      department: "IT",
      gender: "Male",
      phone: "9876543210",
      localAddress: "Kolkata",
      permanentAddress: "West Bengal"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      employeeId: "EMP002",
      department: "HR",
      gender: "Male",
      phone: "9876543211",
      localAddress: "Howrah",
      permanentAddress: "Bihar"
    },
    {
      id: 3,
      name: "Sneha Das",
      employeeId: "EMP003",
      department: "Finance",
      gender: "Female",
      phone: "9876543212",
      localAddress: "Salt Lake",
      permanentAddress: "West Bengal"
    }
  ]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Add Employee
  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      {
        ...employee,
        id: Date.now()
      }
    ]);
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter((employee) => employee.id !== id)
    );
  };

  // Edit Employee
  const editEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  // Update Employee
  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );

    setEditingEmployee(null);
  };

  // Search + Department Filter
  const filteredEmployees = employees.filter((employee) => {

    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div>

      <Header />

      <main className="container">

        <h2>Employee Directory</h2>

        {/* Employee Count */}
        <div className="count">
          Total Employees: <strong>{employees.length}</strong>
        </div>

        {/* Employee Form */}
        <EmployeeForm
          addEmployee={addEmployee}
          editingEmployee={editingEmployee}
          updateEmployee={updateEmployee}
        />

        {/* Search and Filter */}
        <div className="filter-section">

          <input
            type="text"
            placeholder="Search by name or Employee ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>

        </div>

        {/* Employee List */}
        <EmployeeList
          employees={filteredEmployees}
          deleteEmployee={deleteEmployee}
          editEmployee={editEmployee}
        />

      </main>

      <Footer />

    </div>
  );
}

export default App;