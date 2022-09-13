import React from "react";
import Box from "@mui/material/Box";
import { LightSidebar } from "../../theme";

const SidebarBgWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        backgroundColor: LightSidebar.sidebarBgColor,
        color: LightSidebar.sidebarTextColor,
        // boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.04)',
        "& > *": {
          position: "relative",
          zIndex: 3,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarBgWrapper;
