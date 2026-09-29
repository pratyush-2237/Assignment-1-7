import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const access = localStorage.getItem(
    "taskManagerAccess"
  );

  if (!access) {
    localStorage.setItem(
      "taskManagerAccess",
      "true"
    );
  }

  return children;
}

export default ProtectedRoute;