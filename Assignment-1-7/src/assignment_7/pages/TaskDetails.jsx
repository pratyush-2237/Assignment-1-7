import {
  useNavigate,
  useParams
} from "react-router-dom";

function TaskDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const tasks =
    JSON.parse(
      localStorage.getItem("tasks")
    ) || [];

  const task = tasks.find(
    (item) =>
      item.id.toString() === id
  );

  if (!task) {

    return (
      <div>

        <h1>
          Task Not Found
        </h1>

        <button
          onClick={() =>
            navigate("/tasks")
          }
        >
          Back to Tasks
        </button>

      </div>
    );
  }

  const updateTask = () => {

    const updatedTasks =
      tasks.map((item) =>
        item.id === task.id
          ? {
              ...item,
              status: "Pending"
            }
          : item
      );

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );

    alert(
      "Task updated successfully!"
    );

    navigate("/tasks");
  };

  const completeTask = () => {

    const updatedTasks =
      tasks.map((item) =>
        item.id === task.id
          ? {
              ...item,
              status: "Closed"
            }
          : item
      );

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );

    navigate("/completed");
  };

  const deleteTask = () => {

    const updatedTasks =
      tasks.filter(
        (item) =>
          item.id !== task.id
      );

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );

    navigate("/tasks");
  };

  return (
    <div>

      <h1>
        Task Details
      </h1>

      <div className="details-card">

        <h2>
          {task.header}
        </h2>

        <p>
          <strong>
            Description:
          </strong>
        </p>

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
            Raised Date & Time:
          </strong>{" "}
          {task.raisedDate}
        </p>

        <p>
          <strong>
            Due Date:
          </strong>{" "}
          {task.dueDate}
        </p>

        <p>
          <strong>
            Status:
          </strong>{" "}
          {task.status}
        </p>

        <div className="task-buttons">

          {task.status !== "Pending" &&
            task.status !== "Closed" && (

              <button
                className="pending-btn"
                onClick={updateTask}
              >
                Mark Pending
              </button>

            )}

          {task.status !== "Closed" && (

            <button
              className="complete-btn"
              onClick={completeTask}
            >
              Mark Completed
            </button>

          )}

          <button
            className="delete-btn"
            onClick={deleteTask}
          >
            Delete
          </button>

          <button
            onClick={() =>
              navigate("/tasks")
            }
          >
            Back
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskDetails;