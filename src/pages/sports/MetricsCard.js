import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {Fonts} from 'shared/constants/AppEnums';
import {Avatar, CircularProgress, Typography, useTheme} from '@mui/material';
import apiRequests from 'apiRequests';
import {useMutation, useQueryClient} from 'react-query';
import {useParams} from 'react-router-dom';

const MetricsCard = ({id, icon, text, progress, isIconFullWidth, bgColor}) => {
  const theme = useTheme();
  const {kpiId} = useParams();
  const queryClient = useQueryClient();

  const scoreColors = {
    1: theme.palette.analytics.notStarted,
    2: theme.palette.analytics.notStarted,
    3: theme.palette.analytics.inProgress,
    4: theme.palette.analytics.done,
    5: theme.palette.analytics.done,
  };

  const {mutate: updateMetric, isLoading: isMetricUpdating} = useMutation(
    (score) => apiRequests.updateMetric({id}, {score}),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['metrics', kpiId]);
      },
    },
  );

  return (
    <AppCard
      sxStyle={{
        height: 1,
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          my: 4,
        }}
      >
        <Avatar
          sx={{
            padding: !isIconFullWidth && 3,
            display: 'flex',
            mb: {xs: 4, xl: 8},
            marginLeft: 'auto',
            marginRight: 'auto',
            height: {xs: 60, md: 80, lg: 90, xl: 130},
            width: {xs: 60, md: 80, lg: 90, xl: 130},
            backgroundColor: bgColor,
          }}
        >
          {icon && (
            <img
              src={icon}
              alt=''
              style={{
                width: isIconFullWidth ? '100%' : 40,
                height: !isIconFullWidth && 40,
              }}
            />
          )}
        </Avatar>
      </Box>
      <Box
        component='h3'
        sx={{
          fontWeight: Fonts.MEDIUM,
          fontSize: 20,
        }}
      >
        {text}
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          mt: 3,
          mb: 1.5,
          pl: 0.4,
        }}
      >
        {isMetricUpdating && <CircularProgress size={15} />}
        {!isMetricUpdating &&
          [1, 2, 3, 4, 5].map((number) => (
            <Box
              key={number}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 0.5,
                bgcolor: progress === number ? scoreColors[number] : '#fcfcfc',
                boxShadow: 1,
                mr: 0.25,
                color: progress === number && 'common.white',
                cursor: progress !== number && 'pointer',
              }}
              onClick={() => updateMetric(number)}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                }}
              >
                {number}
              </Typography>
            </Box>
          ))}
      </Box>
    </AppCard>
  );
};

export default MetricsCard;

MetricsCard.defaultProps = {
  bgColor: '',
  value: '',
  onClick: () => {},
};

MetricsCard.propTypes = {
  bgColor: PropTypes.string,
  icon: PropTypes.string,
  iconElement: PropTypes.element,
  progress: PropTypes.number,
  text: PropTypes.string,
  onClick: PropTypes.func,
  onMetricScoreUpdate: PropTypes.func,
  isIconFullWidth: PropTypes.bool,
  id: PropTypes.any,
};
