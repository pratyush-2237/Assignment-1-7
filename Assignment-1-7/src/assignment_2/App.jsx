import React, { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
const [students, setStudents] = useState([
  {
    name: "Pratyush Dutta",
    roll: "231001102237",
    department: "BCA",
    semester: "6th",
    cgpa: 7.75,
    photo: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Rahul Roy",
    roll: "231001102201",
    department: "BCA",
    semester: "6th",
    cgpa: 8.45,
    photo: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Ankit Sharma",
    roll: "231001102215",
    department: "BCA",
    semester: "6th",
    cgpa: 7.90,
    photo: "https://randomuser.me/api/portraits/men/68.jpg"
  },
  {
    name: "Sneha Das",
    roll: "231001102228",
    department: "BCA",
    semester: "6th",
    cgpa: 9.10,
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Riya Sen",
    roll: "231001102245",
    department: "BCA",
    semester: "6th",
    cgpa: 8.75,
    photo: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Arjun Singh",
    roll: "231001102250",
    department: "BCA",
    semester: "6th",
    cgpa: 8.20,
    photo: "https://randomuser.me/api/portraits/men/75.jpg"
  }
]);

  const sortByCGPA = () => {
    const sortedStudents = [...students].sort(
      (a, b) => b.cgpa - a.cgpa
    );

    setStudents(sortedStudents);
  };

  return (
    <div>
      <Header />

      <main>
        <h2>Student Information Portal</h2>

        <button onClick={sortByCGPA}>
          Sort by CGPA
        </button>

        <StudentList students={students} />
      </main>

      <Footer />
    </div>
  );
}

export default App;