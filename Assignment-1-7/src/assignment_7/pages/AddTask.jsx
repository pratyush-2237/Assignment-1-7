import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {

  const navigate = useNavigate();

  const [header, setHeader] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [category, setCategory] =
    useState("Academic");

  const addTask = (e) => {

    e.preventDefault();

    if (
      header.trim() === "" ||
      description.trim() === ""
    ) {
      alert(
        "Please fill all required fields"
      );
      return;
    }

    const tasks =
      JSON.parse(
        localStorage.getItem("tasks")
      ) || [];

    const newTask = {

      id: Date.now(),

      header: header,

      description: description,

      priority: priority,

      category: category,

      raisedDate:
        new Date().toLocaleString(),

      dueDate: "28 Aug 2026",

      status: "Raised"
    };

    const updatedTasks = [
      ...tasks,
      newTask
    ];

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );

    alert(
      "Task added successfully!"
    );

    navigate("/tasks");
  };

  return (
    <div>

      <h1>
        Add Task
      </h1>

      <form
        className="task-form"
        onSubmit={addTask}
      >

        <label>
          Task Header
        </label>

        <input
          type="text"
          placeholder="Enter task header"
          value={header}
          onChange={(e) =>
            setHeader(e.target.value)
          }
        />

        <label>
          Task Description
        </label>

        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <label>
          Priority
        </label>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option value="High">
            High
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Low">
            Low
          </option>
        </select>

        <label>
          Category
        </label>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="Academic">
            Academic
          </option>

          <option value="Personal">
            Personal
          </option>
        </select>

        <label>
          Raised Date & Time
        </label>

        <input
          type="text"
          value={new Date().toLocaleString()}
          readOnly
        />

        <label>
          Due Date
        </label>

        <input
          type="text"
          value="28 Aug 2026"
          readOnly
        />

        <label>
          Status
        </label>

        <input
          type="text"
          value="Raised"
          readOnly
        />

        <button
          type="submit"
          className="add-btn"
        >
          Add Task
        </button>

      </form>

    </div>
  );
}

export default AddTask;