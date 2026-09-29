import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">

        <h2>Task Manager</h2>

        <div className="nav-links">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/tasks">
            Tasks
          </Link>

          <Link to="/add-task">
            Add Task
          </Link>

          <Link to="/completed">
            Completed
          </Link>

        </div>

      </nav>

      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;