import React, { useEffect } from "react";
import { useAuth } from "../../../services/context/AuthContext";
import { useNavigate } from "react-router";

const User = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return <div>User</div>;
};

export default User;
