import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
