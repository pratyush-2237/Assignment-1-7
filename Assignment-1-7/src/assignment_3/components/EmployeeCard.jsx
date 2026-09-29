import React from "react";

function EmployeeCard({
  employee,
  deleteEmployee,
  editEmployee
}) {

  return (
    <div className="employee-card">

      <h3>{employee.name}</h3>

      <p>
        <strong>Employee ID:</strong>{" "}
        {employee.employeeId}
      </p>

      <p>
        <strong>Department:</strong>{" "}
        {employee.department}
      </p>

      <p>
        <strong>Gender:</strong>{" "}
        {employee.gender}
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        {employee.phone}
      </p>

      <p>
        <strong>Local Address:</strong>{" "}
        {employee.localAddress}
      </p>

      <p>
        <strong>Permanent Address:</strong>{" "}
        {employee.permanentAddress}
      </p>

      <div className="buttons">

        <button
          className="edit-btn"
          onClick={() => editEmployee(employee)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteEmployee(employee.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default EmployeeCard;