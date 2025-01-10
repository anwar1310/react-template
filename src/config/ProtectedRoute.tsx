import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
