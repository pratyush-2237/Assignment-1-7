import { useState } from "react";
import TaskCard from "../components/TaskCard";

const sampleTasks = [
  {
    id: 1,
    header: "Complete React Assignment",
    description:
      "Complete Assignment 6 using React Router and Local Storage.",
    priority: "High",
    category: "Academic",
    raisedDate: "29 Sep 2026, 10:00 AM",
    dueDate: "28 Aug 2026",
    status: "Pending"
  },
  {
    id: 2,
    header: "Prepare Python Viva",
    description:
      "Study BFS, DFS, A* and Water Jug algorithms for viva.",
    priority: "High",
    category: "Academic",
    raisedDate: "29 Sep 2026, 11:00 AM",
    dueDate: "28 Aug 2026",
    status: "Raised"
  },
  {
    id: 3,
    header: "Submit Project Report",
    description:
      "Complete and submit the project report to the college.",
    priority: "Medium",
    category: "Academic",
    raisedDate: "29 Sep 2026, 12:00 PM",
    dueDate: "28 Aug 2026",
    status: "Pending"
  },
  {
    id: 4,
    header: "Buy New Notebook",
    description:
      "Purchase notebooks and stationery for the semester.",
    priority: "Low",
    category: "Personal",
    raisedDate: "29 Sep 2026, 1:00 PM",
    dueDate: "28 Aug 2026",
    status: "Raised"
  },
  {
    id: 5,
    header: "Practice Coding",
    description:
      "Practice JavaScript and React coding for one hour.",
    priority: "Medium",
    category: "Academic",
    raisedDate: "29 Sep 2026, 2:00 PM",
    dueDate: "28 Aug 2026",
    status: "Closed"
  },
  {
    id: 6,
    header: "Organize Study Notes",
    description:
      "Arrange all subject notes and practical files.",
    priority: "Low",
    category: "Personal",
    raisedDate: "29 Sep 2026, 3:00 PM",
    dueDate: "28 Aug 2026",
    status: "Raised"
  }
];

function Tasks() {

  const savedTasks =
    JSON.parse(
      localStorage.getItem("tasks")
    );

  if (!savedTasks) {
    localStorage.setItem(
      "tasks",
      JSON.stringify(sampleTasks)
    );
  }

  const [tasks, setTasks] =
    useState(
      savedTasks || sampleTasks
    );

  const [filter, setFilter] =
    useState("All");

  const deleteTask = (id) => {

    const updatedTasks =
      tasks.filter(
        (task) =>
          task.id !== id
      );

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );
  };

  const completeTask = (id) => {

    const updatedTasks =
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: "Closed"
            }
          : task
      );

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter(
          (task) =>
            task.status === filter
        );

  return (
    <div>

      <h1>
        Tasks
      </h1>

      <div className="filter-box">

        <label>
          Filter:
        </label>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option value="All">
            All
          </option>

          <option value="Raised">
            Raised
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Closed">
            Closed
          </option>
        </select>

      </div>

      {filteredTasks.length === 0 ? (

        <p>
          No tasks found.
        </p>

      ) : (

        filteredTasks.map((task) => (

          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />

        ))

      )}

    </div>
  );
}

export default Tasks;