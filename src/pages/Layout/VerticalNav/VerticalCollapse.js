import React, { useEffect, useMemo, useState } from "react";
import {
  Collapse,
  Icon,
  IconButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import Box from "@mui/material/Box";
import { LightSidebar } from "../../../theme";
import VerticalCollapseItem from "./VerticalCollapseItem";
import VerticalItem from "./VerticalItem";

const needsToBeOpened = (pathname, item) => {
  return pathname && isUrlInChildren(item, pathname);
};

const isUrlInChildren = (parent, url) => {
  if (!parent.children) {
    return false;
  }

  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i].children) {
      if (isUrlInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (
      parent.children[i].url === url ||
      url.includes(parent.children[i].url)
    ) {
      return true;
    }
  }

  return false;
};

const VerticalCollapse = ({ item, level }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(() => needsToBeOpened(pathname, item));

  useEffect(() => {
    if (needsToBeOpened(pathname, item)) {
      setOpen(true);
    }
  }, [pathname, item]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <VerticalCollapseItem
        level={level}
        sidebarTextColor={LightSidebar.sidebarTextColor}
        button
        component="div"
        className={clsx("menu-vertical-collapse", open && "open")}
        onClick={handleClick}
      >
        {item.icon && (
          <Box component="span">
            <Icon
              sx={{ mr: 4 }}
              color="action"
              className={clsx("nav-item-icon")}
            >
              {item.icon}
            </Icon>
          </Box>
        )}
        <ListItemText
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: 14,
          }}
          className="nav-item-content"
          classes={{ primary: clsx("nav-item-text") }}
          primary={item.message}
        />
        <IconButton
          className="nav-item-icon-arrow-btn"
          sx={{ p: 0, mr: 0.75 }}
          disableRipple
          size="large"
        >
          <Icon className="nav-item-icon-arrow" color="inherit">
            {open
              ? "expand_more"
              : theme.direction === "ltr"
              ? "chevron_right"
              : "chevron_left"}
          </Icon>
        </IconButton>
      </VerticalCollapseItem>

      {item.children && (
        <Collapse in={open} className="collapse-children">
          {item.children.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "collapse" && (
                <VerticalCollapse item={item} level={level + 1} />
              )}

              {item.type === "item" && (
                <VerticalItem item={item} level={level + 1} />
              )}
            </React.Fragment>
          ))}
        </Collapse>
      )}
    </>
  );
};

export default React.memo(VerticalCollapse);
