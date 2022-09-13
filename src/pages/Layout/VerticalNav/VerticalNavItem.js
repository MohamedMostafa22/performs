import React from "react";
import ListItem from "@mui/material/ListItem";
import { alpha } from "@mui/material";
import { LightSidebar } from "../../../theme";
import { Fonts } from "../../../enums/appEnums";

const VerticalNavItem = ({ children, level, ...rest }) => {
  return (
    <ListItem
      className="menu-vertical-item"
      sx={{
        height: 40,
        my: 0.25,
        cursor: "pointer",
        textDecoration: "none !important",
        mx: 2,
        width: "calc(100% - 16px)",
        pl: 22 + 33 * level + "px",
        pr: 3,
        borderRadius: 1,
        position: "relative",
        transition: "all 0.4s ease",
        whiteSpace: "nowrap",
        "& .nav-item-icon": {
          color: alpha(LightSidebar.sidebarTextColor, 0.7),
          fontSize: 20,
          display: "block",
        },
        "& .nav-item-text": {
          color: alpha(LightSidebar.sidebarTextColor, 0.7),
          fontWeight: Fonts.MEDIUM,
          fontSize: 14,
        },

        "& .MuiTouchRipple-root": {
          zIndex: 1,
        },
        "&.nav-item-header": {
          textTransform: "uppercase",
        },
        "&:hover, &:focus": {
          "& .nav-item-text, & .nav-item-icon, & .nav-item-icon-arrow": {
            color: LightSidebar.sidebarTextColor,
          },
        },
        "&.active": {
          backgroundColor: LightSidebar.sidebarMenuSelectedBgColor,
          pointerEvents: "none",
          "& .nav-item-text": {
            color: LightSidebar.sidebarMenuSelectedTextColor + "!important",
            fontWeight: Fonts.MEDIUM,
          },
          "& .nav-item-icon": {
            color: LightSidebar.sidebarMenuSelectedTextColor + "!important",
          },
        },
        "&.rounded-menu": {
          mr: 4,
          ml: 0,
          width: "calc(100% - 16px)",
          pl: 30 + 33 * level + "px",
          pr: 3,
          borderRadius: "0 30px 30px 0",
        },
        "&.rounded-menu-reverse": {
          ml: 4,
          mr: 0,
          width: "calc(100% - 16px)",
          pl: 14 + 33 * level + "px",
          pr: 3,
          borderRadius: "30px 0 0 30px",
        },
        "&.standard-menu": {
          mx: 0,
          width: "100%",
          pl: 30 + 33 * level + "px",
          pr: 3,
          borderRadius: 0,
          position: "relative",
          "&:after": {
            content: '""',
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: 4,
            backgroundColor: "transparent",
          },
          "&.active:after": {
            backgroundColor: (theme) => theme.palette.primary.main,
          },
        },
        "&.curved-menu": {
          ml: 4,
          mr: 0,
          width: "calc(100% - 16px)",
          pl: 14 + 33 * level + "px",
          pr: 3,
          borderRadius: "30px 0 0 30px",
          position: "relative",
          transition: "none",
          "&:before, &:after": {
            content: '""',
            position: "absolute",
            right: 0,
            zIndex: 1,
            height: 40,
            width: 40,
            backgroundColor: "transparent",
            borderRadius: "50%",
            opacity: 0,
          },
          "&:before": {
            top: -40,
            boxShadow: `30px 30px 0 10px transparent`,
          },
          "&:after": {
            bottom: -40,
            boxShadow: `30px -30px 0 10px transparent`,
          },
          "&:hover, &.active": {
            backgroundColor: LightSidebar.sidebarMenuSelectedBgColor,
            "& .nav-item-text, & .nav-item-icon": {
              color: LightSidebar.sidebarMenuSelectedTextColor + "!important",
            },
            "&:before": {
              boxShadow: `30px 30px 0 10px ${LightSidebar.sidebarMenuSelectedBgColor}`,
              opacity: 1,
            },
            "&:after": {
              boxShadow: `30px -30px 0 10px ${LightSidebar.sidebarMenuSelectedBgColor}`,
              opacity: 1,
            },
          },
          "& .MuiTouchRipple-root": {
            display: "none",
          },
        },
      }}
      {...rest}
    >
      {children}
    </ListItem>
  );
};

export default VerticalNavItem;
