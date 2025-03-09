import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../../services/context/AuthContext.jsx";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login, isAdmin } = useAuth();

  if (isAdmin) return <Navigate to="/admin" />;
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "18px" }}>Admin Login</h2>
      <button
        style={{ display: "block", margin: "20px auto" }}
        onClick={() => {
          login({ username: "admin", password: "password" });
          navigate("/admin");
        }}
      >
        login
      </button>
    </>
  );
};

export default AdminLogin;
