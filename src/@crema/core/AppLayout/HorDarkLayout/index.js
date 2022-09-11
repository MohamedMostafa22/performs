import React from 'react';
import clsx from 'clsx';
import AppContentView from '@crema/core/AppContentView';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import AppThemeSetting from '../../AppThemeSetting';
import HorDarkWrapper from './HorDarkWrapper';
import MainContent from './MainContent';
import {LayoutType} from '../../../../shared/constants/AppEnums';

const HorDarkLayout = () => {
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <HorDarkWrapper
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        appMainFooter: footer && footerType === 'fluid',
        appMainFixedFooter: footer && footerType === 'fixed',
      })}
    >
      <AppSidebar />

      <MainContent>
        <AppHeader />
        <AppContentView />
        <AppFixedFooter />
      </MainContent>
      <AppThemeSetting />
    </HorDarkWrapper>
  );
};

export default HorDarkLayout;
