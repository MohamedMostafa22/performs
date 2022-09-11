import React from 'react';
import Box from '@mui/material/Box';
import AuthWrapper from '../AuthWrapper';
import SigninFirebase from './SigninFirebase';

const Signin = () => {
  return (
    <AuthWrapper>
      <Box sx={{width: '100%'}}>
        <Box sx={{mb: {xs: 6, xl: 8}}}>
          <Box
            sx={{
              mb: 5,
              display: 'flex',
              alignItems: 'center',
              '& .logo': {
                height: 40,
              },
            }}
          >
            <img
              className='logo'
              src='/assets/images/logo.png'
              alt='crema-logo'
            />
            <Box
              component='span'
              sx={{
                color: 'text.primary',
                fontSize: 30,
                fontWeight: 500,
                ml: 3,
              }}
            >
              Performs
            </Box>
          </Box>
        </Box>

        <SigninFirebase />
      </Box>
    </AuthWrapper>
  );
};

export default Signin;
