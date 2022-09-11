import React from 'react';
import AppCard from '@crema/core/AppCard';
import {AppGridContainer} from '@crema';
import {Grid} from '@mui/material';
// import Typography from '@mui/material/Typography';
// import AppCircularProgress from '@crema/core/AppCircularProgress';
import SaleStaticChart from './SaleStaticChart';

// eslint-disable-next-line react/prop-types
const SaleStatics = ({kpis}) => {
  return (
    <AppCard>
      <AppGridContainer>
        <Grid item xs={12} md={12}>
          <SaleStaticChart kpis={kpis} />
        </Grid>
        {/* <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: 1,
            }}
          >
            <Box
              sx={{
                mb: 9,
                pl: {xl: 8},
              }}
            >
              <AppCircularProgress
                activeColor='#0A8FDC'
                pathColor='#F44D50'
                hidePercentage
                value={70}
                centerNode={
                  <img
                    alt='icon'
                    style={{
                      borderRadius: '50%',
                      boxShadow: '0px 10px 20px rgba(160, 165, 185, 0.2)',
                    }}
                    src={'/assets/images/dashboard/application_icon.png'}
                  />
                }
                thickness={2}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  mr: 6,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#0A8FDC',
                    height: 10,
                    width: 10,
                    mr: 2,
                    borderRadius: '50%',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 14,
                  }}
                >
                  Android
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#F44D50',
                    height: 10,
                    width: 10,
                    mr: 2,
                    borderRadius: '50%',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 14,
                  }}
                >
                  IOS
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid> */}
      </AppGridContainer>
    </AppCard>
  );
};

export default SaleStatics;
