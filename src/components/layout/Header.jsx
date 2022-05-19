import axios from "axios";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, logout } from "../../stores/auth";

function Header() {
  // subscript
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <Link to="" className="navbar-brand">
          Todo List App
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <div
                    role="button"
                    className="nav-link"
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="login" className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="register" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
