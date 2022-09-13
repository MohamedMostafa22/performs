import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavigationCrumbs from "./NavigationCrumbs";

export default function Sports() {
  return (
    <>
      <Box
        sx={{
          mb: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavigationCrumbs />
      </Box>
      <Outlet />
    </>
  );
}
