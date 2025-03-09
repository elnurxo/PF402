import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { useAuth } from "../../services/context/AuthContext";

const AdminHeader = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <AppBar className={styles.header} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Code Admin Panel
          </Typography>
          {isAdmin && (
            <>
              <Button color="inherit">
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to={"/admin"}
                  style={{ color: "lightgrey", textDecoration: "none" }}
                >
                  Dashboard
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to={"/admin/add-movie"}
                  style={{ color: "lightgrey", textDecoration: "none" }}
                >
                  Add Movie
                </NavLink>
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  if (window.confirm("are you sure to log out?")) {
                    logout();
                    navigate("/admin/login");
                  }
                }}
              >
                log out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AdminHeader;
