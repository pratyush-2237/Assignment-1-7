import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navbar />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={
            <Navigate to="/dashboard" />
          }
        />

        <Route
          path="dashboard"
          element={<Dashboard />}
        />

        <Route
          path="tasks"
          element={<Tasks />}
        />

        <Route
          path="tasks/:id"
          element={<TaskDetails />}
        />

        <Route
          path="add-task"
          element={<AddTask />}
        />

        <Route
          path="completed"
          element={<CompletedTasks />}
        />

      </Route>

      <Route
        path="*"
        element={
          <Navigate to="/dashboard" />
        }
      />

    </Routes>
  );
}

export default App;