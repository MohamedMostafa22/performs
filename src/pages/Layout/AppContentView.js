/* eslint-disable no-unused-vars */
import React from "react";
import Box from "@mui/material/Box";
import AppContentViewWrapper from "./AppContentViewWrapper";

const AppContentView = ({ sxStyle, children }) => {
  return (
    <AppContentViewWrapper className="app-content-view">
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          p: { xs: 5, md: 7.5, xl: 12.5 },
          ...sxStyle,
        }}
        className="app-content"
      >
        {children}
      </Box>
    </AppContentViewWrapper>
  );
};

export default AppContentView;
