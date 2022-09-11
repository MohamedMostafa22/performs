import {authRouteConfig} from './auth';
import {initialUrl} from 'shared/constants/AppConst';
import {appsConfig} from './apps';
import {Redirect} from 'react-router-dom';
import Error403 from './errorPages/Error403';
import React from 'react';
import {dashBoardConfigs} from './dashboards';
import {errorPagesConfigs} from './errorPages';
import {thirdPartyConfigs} from './thirdParty';
import {extraPagesConfigs} from './extraPages';
import {ecommerceConfig} from './ecommerce';
import {muiComponentConfigs} from './muiComponents';
import {userPagesConfig} from './userPages';
import {userListConfig} from './userList';

import {RoutePermittedRole} from 'shared/constants/AppConst';

const ClubsView = import('./sports/ClubsView');
const SportsView = import('./sports/SportsView');
const PillarsView = import('./sports/PillarsView');
const TeamsView = import('./sports/TeamsView');
const PlayersView = import('./sports/PlayersView');
const KpisView = import('./sports/KpisView');
const MetricsView = import('./sports/MetricsView');

const authorizedStructure = {
  fallbackPath: '/signin',
  unAuthorizedComponent: <Error403 />,
  routes: [
    {
      permittedRole: RoutePermittedRole.user,
      path: '/structure/*',
      component: React.lazy(() => import('./sports')),
    },
    // {
    //   permittedRole: RoutePermittedRole.user,
    //   path: '/structure/clubs',
    //   component: ClubsView,
    // },
    // {
    //   permittedRole: RoutePermittedRole.user,
    //   path: '/structure/clubs/:clubId/sports',
    //   component: SportsView,
    // },
    // {
    //   permittedRole: RoutePermittedRole.user,
    //   path: '/structure/clubs/:clubId/sports/:sportId/pillars',
    //   component: PillarsView,
    // },
    // {
    //   permittedRole: RoutePermittedRole.user,
    //   path: '/structure/clubs/:clubId/sports/:sportId/pillars/:pillarId/teams',
    //   component: TeamsView,
    // },
    // {
    //   permittedRole: RoutePermittedRole.user,
    //   path: '/structure/clubs/:clubId/sports/:sportId/pillars/:pillarId/teams/:teamId/players',
    //   component: PlayersView,
    // },
    // {
    //   permittedRole: RoutePermittedRole.user,
    //   path: '/structure/clubs/:clubId/sports/:sportId/pillars/:pillarId/teams/:teamId/players/:playerId/kpis',
    //   component: KpisView,
    // },
    // {
    //   permittedRole: RoutePermittedRole.user,
    //   path: '/structure/clubs/:clubId/sports/:sportId/pillars/:pillarId/teams/:teamId/players/:playerId/kpis/:kpiId/metrics',
    //   component: MetricsView,
    // },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/players-dashboard/*',
      component: React.lazy(() => import('./dashboard')),
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/coaches-dashboard/*',
      component: React.lazy(() => import('./dashboard/CoachesDashboard')),
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/search/*',
      component: React.lazy(() => import('./dashboard/Search')),
    },
    ...dashBoardConfigs,
    ...appsConfig,
    ...thirdPartyConfigs,
    ...extraPagesConfigs,
    ...ecommerceConfig,
    ...muiComponentConfigs,
    ...userPagesConfig,
    ...userListConfig,
  ],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};

const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: '/',
      exact: true,
      component: () => <Redirect to={initialUrl} />,
    },
  ]),
};

export {authorizedStructure, unAuthorizedStructure, anonymousStructure};
