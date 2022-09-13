import { styled } from "@mui/material";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

const StyledSimpleBarReact = styled(SimpleBarReact)(() => ({
  height: "100%",
  width: "100%",
}));

const AppScrollbar = (props) => {
  const { children, ...others } = props;

  return <StyledSimpleBarReact {...others}>{children}</StyledSimpleBarReact>;
};

export default AppScrollbar;
