import { Link } from "react-router-dom";

function CompletedTasks() {

  const tasks =
    JSON.parse(
      localStorage.getItem("tasks")
    ) || [];

  const completedTasks =
    tasks.filter(
      (task) =>
        task.status === "Closed"
    );

  return (
    <div>

      <h1>
        Completed Tasks
      </h1>

      {completedTasks.length === 0 ? (

        <p>
          No completed tasks yet.
        </p>

      ) : (

        completedTasks.map((task) => (

          <div
            className="task-card"
            key={task.id}
          >

            <div>

              <h3>
                {task.header}
              </h3>

              <p>
                {task.description}
              </p>

              <p>
                <strong>
                  Priority:
                </strong>{" "}
                {task.priority}
              </p>

              <p>
                <strong>
                  Category:
                </strong>{" "}
                {task.category}
              </p>

              <p>
                <strong>
                  Status:
                </strong>{" "}
                {task.status}
              </p>

            </div>

            <Link
              to={`/tasks/${task.id}`}
            >
              <button className="view-btn">
                View
              </button>
            </Link>

          </div>

        ))

      )}

    </div>
  );
}

export default CompletedTasks;