import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div
          style={{ border: "32px solid orange" }}
          class="mx-auto my-7 w-[300px] h-[300px] rounded-full animate-pulse"
        ></div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
