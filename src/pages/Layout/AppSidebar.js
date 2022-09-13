import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import StandardSidebarWrapper from "./StandardSidebarWrapper";
import SidebarWrapper from "./SidebarWrapper";
import UserInfo from "./UserInfo";
import { LightSidebar } from "../../theme";
import AppScrollbar from "../../components/AppScrollBar";
import VerticalNav from "./VerticalNav";
import SidebarBgWrapper from "./SidebarBgWrapper";

const AppSidebar = ({ open, onClose }) => {
  return (
    <>
      <Hidden xlUp>
        <Drawer
          anchor="left"
          open={open}
          onClose={() => onClose && onClose()}
          style={{ position: "absolute" }}
        >
          <StandardSidebarWrapper className="standard-sidebar">
            <SidebarWrapper className="app-sidebar">
              <SidebarBgWrapper>
                <UserInfo color={LightSidebar.sidebarTextColor} />
                <AppScrollbar
                  sx={{
                    py: 2,
                    height: "calc(100vh - 70px) !important",
                  }}
                  scrollToTop={false}
                >
                  <VerticalNav />
                </AppScrollbar>
              </SidebarBgWrapper>
            </SidebarWrapper>
          </StandardSidebarWrapper>
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <StandardSidebarWrapper className="standard-sidebar">
          <SidebarWrapper className="app-sidebar">
            <SidebarBgWrapper>
              <UserInfo color={LightSidebar.sidebarTextColor} />
              <AppScrollbar
                sx={{
                  py: 2,
                  height: "calc(100vh - 141px) !important",
                }}
                scrollToTop={false}
              >
                <VerticalNav />
              </AppScrollbar>
            </SidebarBgWrapper>
          </SidebarWrapper>
        </StandardSidebarWrapper>
      </Hidden>
    </>
  );
};

export default AppSidebar;
