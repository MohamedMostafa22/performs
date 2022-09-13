import React from "react";
import clsx from "clsx";
import VerticalNavGroupItem from "./VerticalNavGroupItem";
import { LightSidebar } from "../../../theme";
import VerticalCollapse from "./VerticalCollapse";
import VerticalItem from "./VerticalItem";

const VerticalNavGroup = ({ item, level }) => {
  return (
    <>
      <VerticalNavGroupItem
        level={level}
        sidebarTextColor={LightSidebar.sidebarTextColor}
        component="div"
        className={clsx("nav-item nav-item-header")}
      >
        {item.message}
      </VerticalNavGroupItem>

      {item.children && (
        <>
          {item.children.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "group" && (
                <NavVerticalGroup item={item} level={level} />
              )}

              {item.type === "collapse" && (
                <VerticalCollapse item={item} level={level} />
              )}

              {item.type === "item" && (
                <VerticalItem item={item} level={level} />
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

const NavVerticalGroup = VerticalNavGroup;

export default NavVerticalGroup;
