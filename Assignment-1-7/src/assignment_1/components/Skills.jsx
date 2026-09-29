import React from "react";

function Skills() {
  const skills = [
    "Python",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Git & GitHub",
    "Data Science",
    "Generative AI"
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;