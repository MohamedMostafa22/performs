import React from "react";
import Box from "@mui/material/Box";
import { Fonts } from "../../enums/appEnums";

function AppBadge({ count, color }) {
  if (color === "primary") {
    color = "primary.main";
  } else if (color === "v") {
    color = "secondary.main";
  }
  return (
    <Box
      sx={{
        bgcolor: color,
        padding: "0px 7px",
        fontSize: 11,
        fontWeight: Fonts.SEMI_BOLD,
        height: 20,
        minWidth: 20,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        color: (theme) => theme.palette.secondary.contrastText,
      }}
    >
      {count}
    </Box>
  );
}

export default React.memo(AppBadge);
