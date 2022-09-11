import React from 'react';
import AppCard from '@crema/core/AppCard';
import {Avatar, Box} from '@mui/material';
import seif from '../../../../img/seif.png';

const Application = () => {
  return (
    <AppCard
      title='Seif Eissa'
      sxStyle={{height: 1, display: 'flex', justifyContent: 'center'}}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          src={seif}
          sx={{
            width: '90%',
            height: 1,
          }}
        />
      </Box>
    </AppCard>
  );
};

export default Application;
