import React, { useEffect, useState } from "react";

function EmployeeForm({
  addEmployee,
  editingEmployee,
  updateEmployee
}) {

  const initialForm = {
    name: "",
    employeeId: "",
    department: "IT",
    gender: "Male",
    phone: "",
    localAddress: "",
    permanentAddress: ""
  };

  const [form, setForm] = useState(initialForm);

  // Load employee details when editing
  useEffect(() => {
    if (editingEmployee) {
      setForm(editingEmployee);
    }
  }, [editingEmployee]);

  // Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.employeeId || !form.phone) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingEmployee) {
      updateEmployee(form);
    } else {
      addEmployee(form);
    }

    setForm(initialForm);
  };

  return (
    <div className="form-container">

      <h3>
        {editingEmployee
          ? "Edit Employee"
          : "Add New Employee"}
      </h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={form.employeeId}
          onChange={handleChange}
        />

        <select
          name="department"
          value={form.department}
          onChange={handleChange}
        >
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="localAddress"
          placeholder="Local Address"
          value={form.localAddress}
          onChange={handleChange}
        />

        <input
          type="text"
          name="permanentAddress"
          placeholder="Permanent Address"
          value={form.permanentAddress}
          onChange={handleChange}
        />

        <button type="submit">
          {editingEmployee
            ? "Update Employee"
            : "Add Employee"}
        </button>

      </form>

    </div>
  );
}

export default EmployeeForm;