import React from 'react';
import clsx from 'clsx';
import AppContentView from '@crema/core/AppContentView';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import AppThemeSetting from '../../AppThemeSetting';
import DrawerLayoutWrapper from './DrawerLayoutWrapper';
import MainContent from './MainContent';
import {LayoutType} from '../../../../shared/constants/AppEnums';
import AppSidebar from './AppSidebar';

const DrawerLayout = () => {
  const {footer, layoutType, headerType, footerType} = useLayoutContext();

  return (
    <DrawerLayoutWrapper
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        appMainFooter: footer && footerType === 'fluid',
        appMainFixedFooter: footer && footerType === 'fixed',
        appMainFixedHeader: headerType === 'fixed',
      })}
    >
      <AppSidebar />

      <MainContent>
        <AppHeader />
        <AppContentView />
        <AppFixedFooter />
      </MainContent>
      <AppThemeSetting />
    </DrawerLayoutWrapper>
  );
};

export default DrawerLayout;
