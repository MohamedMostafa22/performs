import React from 'react';
import clsx from 'clsx';
import AppContentView from '@crema/core/AppContentView';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import AppThemeSetting from '../../AppThemeSetting';
import HorDefaultWrapper from './HorDefaultWrapper';
import MainContent from './MainContent';
import {LayoutType} from '../../../../shared/constants/AppEnums';

const HorDefault = () => {
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <HorDefaultWrapper
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
    </HorDefaultWrapper>
  );
};

export default HorDefault;
