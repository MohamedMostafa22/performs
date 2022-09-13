import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AppCard from "../../components/AppCard";
import { Fonts } from "../../enums/appEnums";
import ProgressBar from "../../components/ProgressBar";

const IconAndProgressCard = ({
  icon,
  bgColor,
  value,
  iconElement,
  progress,
  isIconFullWidth,
  onClick,
}) => {
  return (
    <AppCard
      sxStyle={{
        height: 1,
        textAlign: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Avatar
        sx={{
          padding: !isIconFullWidth && 3,
          display: "flex",
          mb: { xs: 4, xl: 8 },
          marginLeft: "auto",
          marginRight: "auto",
          height: { xs: 60, md: 80, lg: 90, xl: 130 },
          width: { xs: 60, md: 80, lg: 90, xl: 130 },
          backgroundColor: bgColor,
        }}
      >
        {icon && (
          <img
            src={icon}
            alt=""
            style={{
              width: isIconFullWidth ? "100%" : 40,
              height: !isIconFullWidth && 40,
            }}
          />
        )}
        {(!icon && iconElement) || null}
      </Avatar>
      <Box
        component="h3"
        sx={{
          mb: 3,
          fontSize: 20,
          fontWeight: Fonts.MEDIUM,
        }}
      >
        {value}
      </Box>
      <Box
        sx={{
          mb: 1,
        }}
      >
        <ProgressBar progressVal={progress} />
      </Box>
    </AppCard>
  );
};

export default IconAndProgressCard;
