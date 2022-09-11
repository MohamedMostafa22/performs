import React from 'react';
import {useThemeContext} from '../../../../utility/AppContextProvider/ThemeContextProvider';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';
import {ThemeMode} from '../../../../../shared/constants/AppEnums';
import {useHistory} from 'react-router-dom';

const AppLogo = ({color}) => {
  const {theme} = useThemeContext();
  const history = useHistory();

  return (
    <Box
      sx={{
        height: {xs: 56, sm: 70},
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className='app-logo'
      onClick={() => history.push('/')}
    >
      <img
        style={{height: 30}}
        src={
          theme === ThemeMode.DARK || theme.palette.mode === 'dark'
            ? '/assets/images/logo-white.png'
            : '/assets/images/logo.png'
        }
        alt='crema-logo'
      />
      <Box
        component='span'
        sx={{
          color: color,
          fontSize: 26,
          fontWeight: 500,
          marginLeft: 3,
        }}
        className='logo-text'
      >
        Performs
      </Box>
    </Box>
  );
};

export default AppLogo;
AppLogo.propTypes = {
  color: PropTypes.string,
};
