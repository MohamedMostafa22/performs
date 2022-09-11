import React, {useState} from 'react';
import AppSidebar from './AppSidebar';
import {AppContentView} from '../../../index';
import AppThemeSetting from '../../AppThemeSetting';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import BitBucketWrapper from './BitBucketWrapper';
import {LayoutType} from '../../../../shared/constants/AppEnums';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';

const BitBucket = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const {layoutType} = useLayoutContext();

  return (
    <BitBucketWrapper
      className={clsx({
        bitBucketCollapsed: isCollapsed,
        boxedLayout: layoutType === LayoutType.BOXED,
      })}
    >
      <Hidden lgUp>
        <AppHeader />
      </Hidden>
      <AppSidebar isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Box className='mainContent'>
        <AppContentView />
      </Box>
      <AppThemeSetting />
    </BitBucketWrapper>
  );
};

export default BitBucket;
