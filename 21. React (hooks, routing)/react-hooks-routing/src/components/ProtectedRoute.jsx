import { Navigate } from "react-router-dom";
import { useAuth } from "../services/context/AuthContext";

const ProtectedRouted = ({ children }) => {
  const { isAdmin, loading } = useAuth();

  console.log("is admin: ", isAdmin);

  if (loading) return <div>Loading...</div>; // Optional loading state
  if (!isAdmin) return <Navigate to="/admin/login" />;
  return children;
};

export default ProtectedRouted;
