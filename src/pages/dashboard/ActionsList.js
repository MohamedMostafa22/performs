import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppList from "../../components/AppList";
import { Fonts } from "../../enums/appEnums";

const ActionsList = ({ items }) => {
  return (
    <List>
      <AppList
        data={items}
        renderRow={(item) => {
          return (
            <ListItem
              key={item.id}
              sx={{
                px: 5,
                py: 2,
              }}
              className="item-hover"
            >
              <ListItemText
                primary={
                  <Box
                    sx={{
                      fontWeight: Fonts.MEDIUM,
                      fontSize: 14,
                      color: "text.primary",
                    }}
                    component="span"
                  >
                    {item.primaryText}
                  </Box>
                }
                secondary={
                  <Box
                    component="span"
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    {item.secondaryText}
                  </Box>
                }
              />
            </ListItem>
          );
        }}
      />
    </List>
  );
};

export default ActionsList;
