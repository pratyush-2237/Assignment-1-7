import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [remember, setRemember] =
    useState(false);

  const [error, setError] =
    useState("");

  const [strength, setStrength] =
    useState("");

  const checkPasswordStrength = (value) => {

    setPassword(value);

    if (value.length === 0) {
      setStrength("");
    } else if (value.length < 6) {
      setStrength("Weak");
    } else if (
      value.length >= 6 &&
      value.length < 10
    ) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  const handleLogin = (e) => {

    e.preventDefault();

    setError("");

    if (username.trim() === "") {
      setError("Username is required");
      return;
    }

    if (password.trim() === "") {
      setError("Password is required");
      return;
    }

    if (
      username !== "admin" ||
      password !== "admin123"
    ) {
      setError(
        "Invalid username or password"
      );
      return;
    }

    const jwtToken =
      "demo-jwt-token-" +
      Date.now();

    localStorage.setItem(
      "jwtToken",
      jwtToken
    );

    localStorage.setItem(
      "username",
      username
    );

    if (remember) {

      localStorage.setItem(
        "rememberUser",
        "true"
      );

    } else {

      localStorage.removeItem(
        "rememberUser"
      );

    }

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Task Manager</h1>

        <h2>Login</h2>

        <p className="login-info">
          Login to access your Task Manager
        </p>

        <form onSubmit={handleLogin}>

          <label>
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              checkPasswordStrength(
                e.target.value
              )
            }
          />

          {strength && (
            <p className="password-strength">
              Password Strength: {strength}
            </p>
          )}

          <div className="remember-box">

            <input
              type="checkbox"
              checked={remember}
              onChange={(e) =>
                setRemember(e.target.checked)
              }
            />

            <span>
              Remember User
            </span>

          </div>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <div className="demo-login">

          <p>
            <strong>
              Demo Login
            </strong>
          </p>

          <p>
            Username: admin
          </p>

          <p>
            Password: admin123
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;