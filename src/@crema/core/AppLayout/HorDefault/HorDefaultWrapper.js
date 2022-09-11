import React from 'react';
import {Box} from '@mui/material';
import PropsTypes from 'prop-types';

const HorDefaultWrapper = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: (theme) => theme.palette.background.default,

        '&.appMainFixedFooter': {
          pb: {xs: 12, xl: 14.5},
        },
        '&.boxedLayout': {
          maxWidth: {xl: 1480},
          mx: {xl: 'auto'},
          boxShadow: 'none',
          border: '1px solid #e8e5dd',
          pt: {xl: 0},
          '& .app-sidebar': {
            position: {xl: 'sticky'},
            '& [data-simplebar]': {
              height: {xl: 'calc(100vh - 254px) !important'},
            },
          },
          '& .mainContent': {
            position: {xl: 'static'},
          },
          '& .fixed-footer': {
            position: {xl: 'sticky'},
          },
          '&.appMainFixedFooter': {
            pb: {xl: 0},
          },
        },
        '& .customizerOption': {
          top: 210,
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default HorDefaultWrapper;

HorDefaultWrapper.propTypes = {
  children: PropsTypes.node,
};
