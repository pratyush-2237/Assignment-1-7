import "./App.css";

function App() {
  const assignments = [
  {
    id: 1,
    title: "Assignment 1",
    description: "Basic web development concepts and frontend fundamentals.",
    link: `${import.meta.env.BASE_URL}src/assignment_1/index.html`
  },
  {
    id: 2,
    title: "Assignment 2",
    description: "Frontend techniques and responsive web design.",
    link: `${import.meta.env.BASE_URL}src/assignment_2/index.html`
  },
  {
    id: 3,
    title: "Assignment 3",
    description: "Interactive web interface using modern web concepts.",
    link: `${import.meta.env.BASE_URL}src/assignment_3/index.html`
  },
  {
    id: 4,
    title: "Assignment 4",
    description: "Weather dashboard using API integration.",
    link: `${import.meta.env.BASE_URL}src/assignment_4/index.html`
  },
  {
    id: 5,
    title: "Assignment 5",
    description: "React components and user interface development.",
    link: `${import.meta.env.BASE_URL}src/assignment_5/index.html`
  },
  {
    id: 6,
    title: "Assignment 6",
    description: "Task manager application using React.",
    link: `${import.meta.env.BASE_URL}src/assignment_6/index.html`
  },
  {
    id: 7,
    title: "Assignment 7",
    description: "Authentication system using React and local storage.",
    link: `${import.meta.env.BASE_URL}src/assignment_7/index.html`
  }
];

  return (
    <div className="app">

      <header>
        <h1>My Assignment Portfolio</h1>
        <p>React Web Development Assignments</p>
      </header>

      <nav>
        <a href="#home">Home</a>
        <a href="#assignments">Assignments</a>
      </nav>

      <main>

        <section id="home" className="home">
          <h2>Welcome to My Assignment Collection</h2>

          <p>
            This website contains my seven web development assignments
            created using React and modern web technologies.
          </p>

          <a href="#assignments" className="button">
            View Assignments
          </a>
        </section>

        <section id="assignments" className="assignments">

          <h2>My Assignments</h2>

          <div className="assignment-container">

            {assignments.map((assignment) => (
              <div className="assignment-card" key={assignment.id}>

                <h3>
                  {assignment.title}
                </h3>

                <p>
                  {assignment.description}
                </p>

                <a
                  href={assignment.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Assignment
                </a>

              </div>
            ))}

          </div>

        </section>

      </main>

      <footer>
        <p>
          © 2026 My Assignment Portfolio
        </p>

        <p>
          Built with React
        </p>
      </footer>

    </div>
  );
}

export default App;