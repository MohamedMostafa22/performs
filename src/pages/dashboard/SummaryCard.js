import React from 'react';
import AppCard from '@crema/core/AppCard';
import Box from '@mui/material/Box';

import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';

const SummaryCard = ({primaryText, secondaryText, icon, bgColor}) => {
  return (
    <AppCard sxStyle={{height: 1}} className='card-hover'>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            mr: 4,
          }}
        >
          <Avatar
            sx={{
              width: {xs: 46, lg: 54, xl: 60},
              height: {xs: 46, lg: 54, xl: 60},
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: bgColor,
              padding: 2.5,
            }}
          >
            {icon}
          </Avatar>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: {
              xs: 'calc(100% - 62px)',
              lg: 'calc(100% - 70px)',
              xl: 'calc(100% - 76px)',
            },
          }}
        >
          <Box sx={{overflow: 'hidden'}}>
            <Box component='h3'>{primaryText}</Box>
            <Box
              component='p'
              sx={{
                color: 'text.secondary',
                fontSize: 14,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {secondaryText}
            </Box>
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default SummaryCard;

SummaryCard.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};
