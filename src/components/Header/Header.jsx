import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import LOGO from "../../assets/evangadi-logo-5fea54cc.png";
import NavLinks from "./NavLinks";
import { AuthContext } from "../AuthContext/AuthContext";


const Header = () => {
 const navigate = useNavigate();
//  const { token } = useContext(AuthContext);
const token = localStorage.getItem("token");
console.log(token);
  const handleLogoClick = () => {
    if (token) {
      navigate("/home");
    } else {
      navigate("/"); // Navigate to login if the user is not authenticated
    }
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light header_style">
          <div className="container navbar-container">
            <div
              className="navbar-brand"
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            >
              <img src={LOGO} alt="Logo" />
            </div>
            <div className="d-lg-none d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="d-none d-lg-flex align-items-center">
              <NavLinks />
            </div>
          </div>
        </nav>
        <div
          className="d-lg-none offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <div className="d-flex w-100 justify-content-start">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="offcanvas-body">
            <NavLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
