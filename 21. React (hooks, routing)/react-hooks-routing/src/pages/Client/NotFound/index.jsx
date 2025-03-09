import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "4rem", fontWeight: "bold", color: "#1976d2" }}
      >
        404
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 3, color: "#555" }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ textTransform: "none", paddingX: 3 }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
