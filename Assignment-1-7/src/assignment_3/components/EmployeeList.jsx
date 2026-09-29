import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList({
  employees,
  deleteEmployee,
  editEmployee
}) {

  return (
    <div className="employee-list">

      {employees.length === 0 ? (
        <p className="no-data">
          No employees found.
        </p>
      ) : (
        employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={deleteEmployee}
            editEmployee={editEmployee}
          />
        ))
      )}

    </div>
  );
}

export default EmployeeList;