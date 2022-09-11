import React from 'react';
import AppSidebar from './AppSidebar';
import {AppContentView} from '../../../index';
import AppThemeSetting from '../../AppThemeSetting';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import UserMiniHeaderWrapper from './UserMiniHeaderWrapper';
import AppFixedFooter from './AppFixedFooter';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import {LayoutType} from '../../../../shared/constants/AppEnums';

const UserMiniHeader = () => {
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <UserMiniHeaderWrapper
      className={clsx('mini-sidebar-collapsed', {
        appMainFooter: footer && footerType === 'fluid',
        appMainFixedFooter: footer && footerType === 'fixed',
        boxedLayout: layoutType === LayoutType.BOXED,
      })}
    >
      <AppHeader />
      <Box className='mainContent'>
        <AppSidebar />
        <AppContentView />
        <AppFixedFooter />
      </Box>
      <AppThemeSetting />
    </UserMiniHeaderWrapper>
  );
};

export default UserMiniHeader;
