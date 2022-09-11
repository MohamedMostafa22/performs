import {Typography, Box, LinearProgress, useTheme} from '@mui/material';
import getAnalyticsColor from '../utils/getAnalyticsColor';

import PropTypes from 'prop-types';

export default function ProgressBar({
  progressVal,
  size,
  LinearProgressStyles,
  TypographyStyles,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <LinearProgress
        variant='determinate'
        value={progressVal}
        sx={{
          //   height: size === 'lg' ? 16 : 13,
          width: '100%',
          mr: 2,
          bgcolor: 'grey.300',
          '& .MuiLinearProgress-barColorPrimary': {
            bgcolor: getAnalyticsColor(theme.palette.analytics, progressVal),
          },
          ...LinearProgressStyles,
        }}
      />
      <Typography
        fontSize={size === 'lg' ? 12 : 11}
        sx={{
          //   position: 'absolute',
          //   top: -1,
          //   left: '45%',
          color: getAnalyticsColor(theme.palette.analytics, progressVal),
          ...TypographyStyles,
        }}
      >
        {progressVal || 0}%
      </Typography>
    </Box>
  );
}

ProgressBar.defaultProps = {
  size: 'lg',
  LinearProgressStyles: {},
  TypographyStyles: {},
};

ProgressBar.propTypes = {
  progressVal: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['lg', 'md']),
  LinearProgressStyles: PropTypes.object,
  TypographyStyles: PropTypes.object,
};
