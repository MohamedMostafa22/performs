import { Navigate } from "react-router-dom";

import Sports from "./pages/sports";
import ClubsView from "./pages/sports/ClubsView";
import PillarsView from "./pages/sports/PillarsView";
import TeamsView from "./pages/sports/TeamsView";
import PlayersView from "./pages/sports/PlayersView";
import KpisView from "./pages/sports/KpisView";
import MetricsView from "./pages/sports/MetricsView";

import Dashboards from "./pages/dashboard";
import SportsDashboard from "./pages/dashboard/SportsDashboard";
import PillarsDashboard from "./pages/dashboard/PillarsDashboard";
import TeamsDashboard from "./pages/dashboard/TeamsDashboard";
import PlayersDashboard from "./pages/dashboard/PlayersDashboard";
import PlayerDetails from "./pages/dashboard/PlayerDetails";

import Search from "./pages/dashboard/Search";
import SportsView from "./pages/sports/SportsView";
import PlayerTPMDashboard from "./pages/dashboard/PlayerTPMDashboard";

const routes = [
  {
    path: "/",
    element: <Navigate to="/structure/clubs" />,
  },
  {
    path: "/structure/clubs",
    element: <Sports />,
    children: [
      {
        path: "",
        element: <ClubsView />,
      },
      {
        path: ":clubId/sports",
        element: <SportsView />,
      },
      {
        path: ":clubId/sports/:sportId/pillars",
        element: <PillarsView />,
      },
      {
        path: ":clubId/sports/:sportId/pillars/:pillarId/teams",
        element: <TeamsView />,
      },
      {
        path: ":clubId/sports/:sportId/pillars/:pillarId/teams/:teamId/players",
        element: <PlayersView />,
      },
      {
        path: ":clubId/sports/:sportId/pillars/:pillarId/teams/:teamId/players/:playerId/kpis",
        element: <KpisView />,
      },
      {
        path: ":clubId/sports/:sportId/pillars/:pillarId/teams/:teamId/players/:playerId/kpis/:kpiId/metrics",
        element: <MetricsView />,
      },
    ],
  },
  {
    path: "dashboards",
    element: <Dashboards />,
    children: [
      {
        path: "",
        element: <Navigate to="sports" />,
      },
      {
        path: "sports",
        element: <SportsDashboard />,
      },
      {
        path: "sports/:sportId/pillars",
        element: <PillarsDashboard />,
      },
      {
        path: "sports/:sportId/pillars/:pillarId/teams",
        element: <TeamsDashboard />,
      },
      {
        path: "sports/:sportId/pillars/:pillarId/teams/:teamId/players",
        element: <PlayersDashboard />,
      },
      {
        path: "sports/:sportId/pillars/:pillarId/teams/:teamId/players/:playerId",
        element: <PlayerTPMDashboard />,
      },
    ],
  },
  {
    path: "search",
    element: <Search />,
    children: [
      {
        path: ":playerId",
        element: <PlayerDetails />,
      },
    ],
  },
];

export default routes;
