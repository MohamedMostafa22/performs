import React from 'react';
import PropsTypes from 'prop-types';
import {Box} from '@mui/material';

const UserHeaderWrapper = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: (theme) => theme.palette.background.default,
        paddingTop: {xs: 14, sm: 17.5},
        '& .mainContent': {
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: {xs: '100%', lg: 'calc(100% - 280px)'},
          transition: 'all 0.5s ease',
          ml: {lg: '280px'},
        },
        '&.appMainFixedFooter': {
          pb: {xs: 12, xl: 14.5},
        },
        '&.boxedLayout': {
          maxWidth: {xl: 1480},
          mx: {xl: 'auto'},
          boxShadow: 'none',
          border: '1px solid #e8e5dd',
          flexDirection: {xl: 'column'},
          pt: {xl: 0},
          '& .user-header-sidebar': {
            position: {xl: 'sticky'},
            height: {xl: '100%'},
            '& [data-simplebar]': {
              height: {xl: 'calc(100vh - 71px) !important'},
            },
          },
          '& .app-bar': {
            position: {xl: 'sticky'},
            width: {xl: '100%'},
          },
          '& .mainContent': {
            position: {xl: 'static'},
            ml: {xl: 0},
            width: {xl: '100%'},
            flexDirection: {xl: 'row'},
            flexWrap: {xl: 'wrap'},
          },
          '& .fixed-footer': {
            position: {xl: 'sticky'},
          },
          '&.appMainFixedFooter': {
            pb: {xl: 0},
            '& .user-header-sidebar': {
              '& [data-simplebar]': {
                height: {xl: 'calc(100vh - 131px) !important'},
              },
            },
          },
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default UserHeaderWrapper;

UserHeaderWrapper.propTypes = {
  children: PropsTypes.node,
};
