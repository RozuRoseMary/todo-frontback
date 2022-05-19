import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { validateRegister } from "../../services/validate";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [err, setError] = useState({});
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const errResult = validateRegister({
      username,
      email,
      password,
      confirmPassword,
    });
    setError(errResult);

    if (Object.keys(errResult).length === 0) {
      try {
        const res = await axios.post("/users/register", {
          username,
          password,
          email,
          confirmPassword,
        });
        navigate("/login");
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
        {/* username */}
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
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${err.email ? " is-invalid" : ""}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {err.email && <div className="invalid-feedback">{err.email}</div>}
        </div>

        {/* password */}
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

        {/* confirm password */}
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${
              err.confirmPassword ? " is-invalid" : ""
            }`}
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {err.confirmPassword && (
            <div className="invalid-feedback">{err.confirmPassword}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary m-3">
          Register
        </button>
        {apiError && (
          <div class="alert alert-danger" role="alert">
            {apiError}
          </div>
        )}
      </form>
    </div>
  );
}

export default RegisterForm;
