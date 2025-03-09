import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const Header = () => {
  return (
    <>
      <AppBar className={styles.header} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Code Client Panel
          </Typography>
          <Button color="inherit">
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/"}
              style={{ color: "lightgrey", textDecoration: "none" }}
            >
              Home
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/about"}
              style={{ color: "lightgrey", textDecoration: "none" }}
            >
              About
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/movies"}
              style={{ color: "lightgrey", textDecoration: "none" }}
            >
              Movies
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/contact"}
              style={{ color: "lightgrey", textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
