import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/UseAuth";
import { ReactNode } from "react";

export const ProtectedRoute = ({ children, userRole=['guest', 'member', 'instructor', 'admin'] }:{children:ReactNode, userRole?:string[]}) => {
  const { user } = useAuth();
  let allowedUser = false
  if(user) userRole.forEach(role => {if(role === user.user_role) allowedUser = true })
  if (!user || !allowedUser) return <Navigate to="/login" />;
  return children;
};