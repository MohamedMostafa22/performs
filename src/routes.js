import React from 'react';
import ClubsView from './pages/sports/ClubsView';
import SportsView from './pages/sports/SportsView';
import PillarsView from './pages/sports/PillarsView';
import TeamsView from './pages/sports/TeamsView';
import PlayersView from './pages/sports/PlayersView';
import KpisView from './pages/sports/KpisView';
import MetricsView from './pages/sports/MetricsView';

const routes = [
  {
    path: '/',
    component: React.lazy(() => import('./sports')),
    children: [
      {
        path: 'clubs',
        component: ClubsView,
        children: [
          {
            path: ':clubId/sports',
            component: SportsView,
            children: [
              {
                path: ':sportId/pillars',
                component: PillarsView,
                children: [
                  {
                    path: ':pillarId/teams',
                    component: TeamsView,
                    children: [
                      {
                        path: ':teamId/players',
                        component: PlayersView,
                        children: [
                          {
                            path: ':playerId/kpis',
                            component: KpisView,
                            children: [
                              {
                                path: ':kpiId/metrics',
                                component: MetricsView,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
