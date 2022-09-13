import React from "react";
import List from "@mui/material/List";

import NavVerticalGroup from "./VerticalNavGroup";
import VerticalCollapse from "./VerticalCollapse";
import VerticalItem from "./VerticalItem";

import { HiOutlineChartSquareBar } from "react-icons/hi";
import { MdOutlineSportsKabaddi } from "react-icons/md";

const navigationLinks = [
  {
    id: "app",
    title: "Application",
    message: "Application",
    type: "group",
    children: [
      {
        id: "dashboard",
        message: "Dashboard",
        icon: <HiOutlineChartSquareBar />,
        type: "collapse",
        children: [
          {
            id: "tpm",
            title: "TPM",
            message: "TPM",
            type: "item",
            url: "/dashboards/",
          },
          {
            id: "search",
            title: "Search",
            message: "Search",
            type: "item",
            url: "/search/",
          },
        ],
      },
      {
        id: "clubs",
        title: "Clubs",
        message: "Clubs",
        type: "item",
        icon: <MdOutlineSportsKabaddi />,
        url: "/structure/clubs/",
      },
    ],
  },
];

const VerticalNav = () => {
  return (
    <List
      sx={{
        position: "relative",
        padding: 0,
      }}
      component="div"
    >
      {navigationLinks.map((item) => (
        <React.Fragment key={item.id}>
          {item.type === "group" && <NavVerticalGroup item={item} level={0} />}

          {item.type === "collapse" && (
            <VerticalCollapse item={item} level={0} />
          )}

          {item.type === "item" && <VerticalItem item={item} level={0} />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default VerticalNav;
