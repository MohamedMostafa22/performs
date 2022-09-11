import React from 'react';
import Box from '@mui/material/Box';

import {styled} from '@mui/material/styles';

const LogoWrapper = styled('div')(({theme}) => {
  return {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 40,
    zIndex: 1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('xl')]: {
      top: 60,
    },
    '& .logo': {
      height: 40,
    },
  };
});

const AuthImgPanel = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
      }}
    >
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        src='/assets/images/auth/auth.svg'
        alt='crema-logo'
      />
      <LogoWrapper>
        <img className='logo' src='/assets/images/logo.png' alt='crema-logo' />
        <Box
          component='span'
          sx={{
            color: '#333333',
            fontSize: 36,
            fontWeight: 500,
            ml: 3,
          }}
        >
          Crema
        </Box>
      </LogoWrapper>
    </Box>
  );
};

export default AuthImgPanel;
