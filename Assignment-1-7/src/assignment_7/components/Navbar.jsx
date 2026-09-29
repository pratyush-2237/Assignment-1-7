import {
  Link,
  Outlet,
  useNavigate
} from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const username =
    localStorage.getItem("username");

  const logout = () => {

    localStorage.removeItem(
      "jwtToken"
    );

    localStorage.removeItem(
      "username"
    );

    localStorage.removeItem(
      "rememberUser"
    );

    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">

        <h2>
          Task Manager
        </h2>

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

          <span className="username">
            {username}
          </span>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </nav>

      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;