import React from "react";
import { Icon, ListItemText } from "@mui/material";
import clsx from "clsx";
import Box from "@mui/material/Box";
import AppNavLink from "../../../components/AppNavLink";
import AppBadge from "../../../components/AppBadge";
import VerticalNavItem from "./VerticalNavItem";

const VerticalItem = ({ level, item }) => {
  return (
    <VerticalNavItem
      level={level}
      button
      component={AppNavLink}
      to={item.url}
      activeClassName="active"
      exact={item.exact}
    >
      {item.icon && (
        <Box component="span">
          <Icon
            sx={{
              fontSize: 18,
              display: "block",
              mr: 4,
            }}
            className={clsx("nav-item-icon", "material-icons-outlined")}
            color="action"
          >
            {item.icon}
          </Icon>
        </Box>
      )}
      <ListItemText
        className="nav-item-content"
        primary={item.message}
        classes={{ primary: "nav-item-text" }}
      />
      {item.count && (
        <Box sx={{ mr: 3.5 }} className="menu-badge">
          <AppBadge count={item.count} color={item.color} />
        </Box>
      )}
    </VerticalNavItem>
  );
};

export default React.memo(VerticalItem);
