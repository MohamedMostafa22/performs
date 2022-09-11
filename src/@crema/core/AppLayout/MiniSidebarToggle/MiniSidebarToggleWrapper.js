import React from 'react';
import PropsTypes from 'prop-types';
import {Box} from '@mui/material';

const MiniSidebarToggleWrapper = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: (theme) => theme.palette.background.default,
        '& .mainContent': {
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: {xs: '100%', lg: 'calc(100% - 280px)'},
          transition: 'all 0.5s ease',
          ml: {lg: '280px'},
        },
        '&.mini-sidebar-collapsed': {
          '& .mainContent': {
            width: {lg: 'calc(100% - 64px)'},
            ml: {lg: '64px'},
          },
          '& .mini-toggle-sidebar:not(:hover)': {
            width: {lg: 64},
            '& .user-info, & .nav-item-header, & .nav-item-content, & .menu-badge, & .collapse-children, & .nav-item-icon-arrow-btn':
              {
                display: 'none',
              },
            '& .nav-item-icon': {
              mr: 0,
              ml: 0.5,
            },
          },
          '&.appMainFixedHeader .app-bar': {
            width: {lg: 'calc(100% - 64px)'},
          },
          '& .menu-vertical-item': {
            pl: 3,
            '&.rounded-menu': {
              mx: 2,
              pl: 3,
              borderRadius: 1,
            },
            '&.rounded-menu-reverse': {
              mx: 2,
              pl: 3,
              borderRadius: 1,
            },
            '&.standard-menu': {
              mx: 2,
              width: 'calc(100% - 16px)',
              pl: 3,
              borderRadius: 1,
              '&.active:after': {
                backgroundColor: 'transparent',
              },
            },
            '&.curved-menu': {
              mx: 2,
              borderRadius: 1,
              '&:before, &:after': {
                display: 'none',
              },
            },
          },
          '& .menu-vertical-collapse': {
            pl: 3,
            mx: 2,
            width: 'calc(100% - 16px)',
          },
        },
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
          '& .mini-toggle-sidebar': {
            position: {xl: 'sticky'},
            height: {xl: '100%'},
            '& [data-simplebar]': {
              height: {xl: 'calc(100vh - 70px) !important'},
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

export default MiniSidebarToggleWrapper;

MiniSidebarToggleWrapper.propTypes = {
  children: PropsTypes.node,
};
