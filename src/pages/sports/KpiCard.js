import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";
import AppCard from "../../components/AppCard";
import { Fonts } from "../../enums/appEnums";
import ProgressBar from "../../components/ProgressBar";

const KpiCard = ({
  icon,
  text,
  progress,
  onClick,
  isIconFullWidth,
  bgColor = "grey.200",
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
      </Avatar>
      <Box
        component="h3"
        sx={{
          fontWeight: Fonts.MEDIUM,
          fontSize: 18,
          mb: 5,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {text}
      </Box>
      <Box>
        <ProgressBar progressVal={progress} />
      </Box>
    </AppCard>
  );
};

export default KpiCard;

KpiCard.defaultProps = {
  bgColor: "",
  value: "",
  onClick: () => {},
};

KpiCard.propTypes = {
  bgColor: PropTypes.string,
  icon: PropTypes.string,
  iconElement: PropTypes.element,
  progress: PropTypes.number,
  text: PropTypes.string,
  onClick: PropTypes.func,
  isIconFullWidth: PropTypes.bool,
};
