import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/UseAuth";
import { ReactNode } from "react";


export const ProtectedRoute = ({ children }:{children:ReactNode}) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};