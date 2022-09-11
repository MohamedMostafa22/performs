import React, {useState} from 'react';
import AppSidebar from './AppSidebar';
import {AppContentView} from '../../../index';
import AppThemeSetting from '../../AppThemeSetting';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import MiniSidebarWrapper from './MiniSidebarWrapper';
import AppFixedFooter from './AppFixedFooter';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import {LayoutType} from '../../../../shared/constants/AppEnums';

const MiniSidebar = () => {
  const [isCollapsed, setCollapsed] = useState(true);
  const {footer, layoutType, headerType, footerType} = useLayoutContext();

  return (
    <MiniSidebarWrapper
      className={clsx({
        'mini-sidebar-collapsed': isCollapsed,
        appMainFooter: footer && footerType === 'fluid',
        appMainFixedFooter: footer && footerType === 'fixed',
        boxedLayout: layoutType === LayoutType.BOXED,
        appMainFixedHeader: headerType === 'fixed',
      })}
    >
      <AppSidebar />
      <Box className='mainContent'>
        <AppHeader setCollapsed={setCollapsed} isCollapsed={isCollapsed} />
        <AppContentView />
        <AppFixedFooter />
      </Box>
      <AppThemeSetting />
    </MiniSidebarWrapper>
  );
};

export default MiniSidebar;
