import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

const NavLinks = () => {
  const { token, clearToken, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    clearToken(); 
    navigate("/"); 
  };

  // Determine if the user is authenticated based on the presence of the token
  const isAuthenticated = !!token;

  return (
    <>
      <ul className="navbar-nav d-flex flex-column flex-lg-row">
        <li className="nav-item mx-lg-3">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item mx-lg-3">
          <Link className="nav-link" to="/home">
            How It Works
          </Link>
        </li>
      </ul>
      <div className="mt-3 mt-lg-0 ml-lg-3">
        {isAuthenticated ? (
          <>
            <button
              className="btn btn-custom-width logout-button"
              onClick={handleLogoutClick}
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/" className="btn btn-primary btn-custom-width">
            Log In
          </Link>
        )}
      </div>
    </>
  );
};

export default NavLinks;
