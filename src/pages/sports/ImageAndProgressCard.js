import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Fonts} from 'shared/constants/AppEnums';
import {Box} from '@mui/material';
import ProgressBar from 'components/ProgressBar';
import PropTypes from 'prop-types';

export default function ImageAndProgressCard({imgSrc, title, progress}) {
  return (
    <Card
      sx={{
        width: '100%',
        cursor: 'pointer',
      }}
    >
      <CardMedia
        component='img'
        height='140'
        image={imgSrc}
        alt='green iguana'
      />
      <CardContent>
        <Box
          component='h3'
          sx={{
            mb: 3,
            fontSize: 20,
            fontWeight: Fonts.MEDIUM,
            textAlign: 'center',
          }}
        >
          {title}
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <ProgressBar progressVal={progress} />
        </Box>
      </CardContent>
    </Card>
  );
}

ImageAndProgressCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};
