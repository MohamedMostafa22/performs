import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AppLogo = ({ color }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: { xs: 56, sm: 70 },
        padding: 2.5,
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="app-logo"
      onClick={() => navigate("/")}
    >
      <img
        style={{ height: 30 }}
        src="/assets/images/logo.png"
        alt="performs-logo"
      />
      <Box
        component="span"
        sx={{
          color: color,
          fontSize: 26,
          fontWeight: 500,
          marginLeft: 3,
        }}
        className="logo-text"
      >
        Performs
      </Box>
    </Box>
  );
};

export default AppLogo;
