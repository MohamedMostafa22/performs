import React from 'react';
import PropsTypes from 'prop-types';
import {Box} from '@mui/material';

const BitBucketWrapper = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: (theme) => theme.palette.background.default,
        paddingTop: {xs: 14, sm: 17.5, lg: 0},
        '& .mainContent': {
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: {xs: '100%', lg: 'calc(100% - 320px)'},
          transition: 'all 0.5s ease',
        },
        '&.bitBucketCollapsed': {
          '& .mainContent': {
            width: 'calc(100% - 64px)',
          },
          '& .bit-bucket-sidebar': {
            width: 64,
            '& .app-sidebar-container': {
              width: 8,
              borderLeftColor: 'transparent',
            },
          },
        },
        '&.boxedLayout': {
          maxWidth: {xl: 1480},
          mx: {xl: 'auto'},
          boxShadow: 'none',
          border: '1px solid #e8e5dd',
          pt: {xl: 0},
          '& .bit-bucket-sidebar': {
            position: {xl: 'sticky'},
            left: {xl: 0},
            top: {xl: 0},
            height: {xl: '100%'},
            '& [data-simplebar]': {
              height: {xl: 'calc(100vh - 70px) !important'},
            },
          },
          '& .bit-bucket-sidebar-fixed': {
            position: {xl: 'relative'},
          },
          '& .app-bar': {
            position: {xl: 'sticky'},
            width: {xl: '100%'},
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
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default BitBucketWrapper;

BitBucketWrapper.propTypes = {
  children: PropsTypes.node,
};
