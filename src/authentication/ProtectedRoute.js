import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.cookie) {
    return <Navigate to="/login" />;
  }
  return children;
};
