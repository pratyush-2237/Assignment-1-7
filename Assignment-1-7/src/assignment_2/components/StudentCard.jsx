import React from "react";

function StudentCard({
  name,
  roll,
  department,
  semester,
  cgpa,
  photo
}) {
  return (
    <div className="student-card">
      <img src={photo} alt={name} />

      <div className="student-info">
        <h3>{name}</h3>

        <p>
          <strong>Roll Number:</strong> {roll}
        </p>

        <p>
          <strong>Department:</strong> {department}
        </p>

        <p>
          <strong>Semester:</strong> {semester}
        </p>

        <p>
          <strong>CGPA:</strong> {cgpa}
        </p>
      </div>
    </div>
  );
}

export default StudentCard;