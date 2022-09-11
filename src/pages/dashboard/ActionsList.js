import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {AppList} from '@crema';
import {Fonts} from 'shared/constants/AppEnums';

const ActionsList = ({items}) => {
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
              className='item-hover'
            >
              <ListItemText
                primary={
                  <Box
                    sx={{
                      fontWeight: Fonts.MEDIUM,
                      fontSize: 14,
                      color: 'text.primary',
                    }}
                    component='span'
                  >
                    {item.primaryText}
                  </Box>
                }
                secondary={
                  <Box
                    component='span'
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

ActionsList.defaultProps = {
  items: [],
};

ActionsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      primaryText: PropTypes.string.isRequired,
      secondaryText: PropTypes.string.isRequired,
    }),
  ),
};
