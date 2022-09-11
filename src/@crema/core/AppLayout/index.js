import React from 'react';
import AppContentView from '@crema/core/AppContentView';
import useStyles from 'shared/jss/global.style';
import {useAuthUser} from '../../utility/AuthHooks';
import {useLayoutContext} from '../../utility/AppContextProvider/LayoutContextProvider';
import Layouts from './Layouts';
import AuthWrapper from './AuthWrapper';

const AppLayout = () => {
  useStyles();
  const {navStyle} = useLayoutContext();
  const {isAuthenticated} = useAuthUser();
  const AppLayout = Layouts[navStyle];
  return (
    <>
      {isAuthenticated ? (
        <AppLayout />
      ) : (
        <AuthWrapper>
          <AppContentView />
        </AuthWrapper>
      )}
    </>
  );
};

export default React.memo(AppLayout);
