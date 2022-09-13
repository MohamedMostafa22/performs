import { Box } from "@mui/material";
import { useState } from "react";
import AppContentView from "./AppContentView";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import Wrapper from "./Wrapper";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Wrapper>
      <AppHeader onSidebarOpenClick={() => setIsSidebarOpen(true)} />
      <Box className="mainContent">
        <AppSidebar
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <AppContentView>{children}</AppContentView>
      </Box>
    </Wrapper>
  );
}
