import { Link } from "react-router-dom";

function TaskCard({
  task,
  deleteTask,
  completeTask
}) {
  return (
    <div className="task-card">

      <div>

        <h3>{task.header}</h3>

        <p>{task.description}</p>

        <p>
          <strong>Priority:</strong>{" "}
          {task.priority}
        </p>

        <p>
          <strong>Category:</strong>{" "}
          {task.category}
        </p>

        <p>
          <strong>Raised:</strong>{" "}
          {task.raisedDate}
        </p>

        <p>
          <strong>Due:</strong>{" "}
          {task.dueDate}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {task.status}
        </p>

      </div>

      <div className="task-buttons">

        <Link to={`/tasks/${task.id}`}>
          <button className="view-btn">
            View
          </button>
        </Link>

        {task.status !== "Closed" && (
          <button
            className="complete-btn"
            onClick={() =>
              completeTask(task.id)
            }
          >
            Complete
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() =>
            deleteTask(task.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;