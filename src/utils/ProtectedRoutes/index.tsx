import { ReactNode } from "react";
// ROUTER
import { Navigate } from "react-router-dom";
// REDUX
import currentStorage from "../CurrentStorage";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const storage = currentStorage();
  const accessToken = storage.getItem("accessToken");

  if (!accessToken) {
    // user is not authenticated
    return <Navigate to="/auth/signin" />;
  }

  return children;
};
