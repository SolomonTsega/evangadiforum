import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
 const token = localStorage.getItem("token");

  if (!token) {
    return (
      <>
        <p>Please Sign in to see this page.</p>
        <Navigate to="/" />
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
