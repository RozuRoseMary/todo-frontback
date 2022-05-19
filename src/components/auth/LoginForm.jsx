import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { validateLogin } from "../../services/validate";
import { login, loginAsync } from "../../stores/auth";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState({});
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const errResult = validateLogin({
      username,
      password,
    });
    setError(errResult);
    // axios.post  /users/login
    if (Object.keys(errResult).length === 0) {
      // const res = await axios.post("/users/login", { username, password });
      // dispatch(login({ token: res.data.token }));
      // dispatch(login({ username, password }));
      dispatch(loginAsync(username, password));
      try {
        const res = await axios.post("/users/login", {
          username,
          password,
        });
        localStorage.setItem("accessToken", res.data.token);
        navigate("/");
      } catch (err) {
        if (err.response) {
          setApiError(err.response.data.message);
        }
      }
    }
  };

  return (
    <div className="border border-1 rounded-3 p-4 bg-white shadow-sm">
      <form onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className={`form-control ${err.username ? " is-invalid" : ""}`}
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {err.username && (
            <div className="invalid-feedback">{err.username}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${err.password ? " is-invalid" : ""}`}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {err.password && (
            <div className="invalid-feedback">{err.password}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
        {apiError && (
          <div className="alert alert-danger" role="alert">
            {apiError}
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
