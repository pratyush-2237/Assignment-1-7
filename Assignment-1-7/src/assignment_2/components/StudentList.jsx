import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          roll={student.roll}
          department={student.department}
          semester={student.semester}
          cgpa={student.cgpa}
          photo={student.photo}
        />
      ))}
    </div>
  );
}

export default StudentList;