import { Link } from "react-router-dom";

function Dashboard() {

  const tasks =
    JSON.parse(
      localStorage.getItem("tasks")
    ) || [];

  const totalTasks =
    tasks.length;

  const pendingTasks =
    tasks.filter(
      (task) =>
        task.status === "Pending"
    ).length;

  const completedTasks =
    tasks.filter(
      (task) =>
        task.status === "Closed"
    ).length;

  const raisedTasks =
    tasks.filter(
      (task) =>
        task.status === "Raised"
    ).length;

  const username =
    localStorage.getItem("username");

  return (
    <div>

      <h1>
        Dashboard
      </h1>

      <p>
        Welcome, {username}
      </p>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>
            {totalTasks}
          </h2>

          <p>
            Total Tasks
          </p>
        </div>

        <div className="dashboard-card">
          <h2>
            {raisedTasks}
          </h2>

          <p>
            Raised Tasks
          </p>
        </div>

        <div className="dashboard-card">
          <h2>
            {pendingTasks}
          </h2>

          <p>
            Pending Tasks
          </p>
        </div>

        <div className="dashboard-card">
          <h2>
            {completedTasks}
          </h2>

          <p>
            Completed Tasks
          </p>
        </div>

      </div>

      <Link to="/add-task">
        <button className="add-btn">
          + Add New Task
        </button>
      </Link>

    </div>
  );
}

export default Dashboard;