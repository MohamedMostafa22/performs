import React from 'react';
import {Box} from '@mui/material';
import PropsTypes from 'prop-types';

const DefaultLayoutWrapper = ({children, ...rest}) => {
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
        '&.appMainFixedHeader': {
          pt: {xs: 14, sm: 17.5},
          '& .app-bar': {
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 9,
            width: {
              xs: '100%',
              lg: 'calc(100% - 280px)',
            },
          },
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
          '&.appMainFixedHeader .app-bar': {
            position: {xl: 'sticky'},
            width: {xl: '100%'},
          },
          '& .mainContent': {
            position: {xl: 'static'},
            ml: {xl: 0},
          },
          '& .fixed-footer': {
            position: {xl: 'sticky'},
          },
          '&.appMainFixedFooter': {
            pb: {xl: 0},
          },
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default DefaultLayoutWrapper;

DefaultLayoutWrapper.propTypes = {
  children: PropsTypes.node,
};
