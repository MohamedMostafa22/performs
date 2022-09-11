/* eslint-disable no-unused-vars */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useHistory, useParams} from 'react-router-dom';
import getLayerItemIdsFromString from 'utils/getLayerItemIdsFromString';
import {CircularProgress, Link} from '@mui/material';
import NavigationLink from './NavigationLink';
import isNil from 'lodash/isNil';
import {useQuery} from 'react-query';
import apiRequests from 'apiRequests';

export default function NavigationCrumbs() {
  const history = useHistory();
  const {clubId, sportId, pillarId, teamId, playerId, kpiId} = useParams();
  const {data: clubsRes, isLoading: areClubsLoading} = useQuery(
    ['clubs', clubId],
    () =>
      apiRequests.fetchClubs({
        id: clubId,
      }),
    {
      enabled: !!clubId,
    },
  );

  const club = clubsRes && clubsRes[0];

  const {data: sportsRes, isLoading: areSportsLoading} = useQuery(
    ['sports', {sportId}],
    () =>
      apiRequests.fetchSports({
        id: sportId,
      }),
    {
      enabled: !!sportId,
    },
  );

  const sport = sportsRes && sportsRes[0];

  const {data: pillarsRes, isLoading: arePillarsLoading} = useQuery(
    ['pillars', {pillarId}],
    () =>
      apiRequests.fetchPillars({
        id: pillarId,
      }),
    {
      enabled: !!pillarId,
    },
  );

  const pillar = pillarsRes && pillarsRes[0];

  const {data: teamsRes, isLoading: areTeamsLoading} = useQuery(
    ['teams', {teamId}],
    () =>
      apiRequests.fetchTeams({
        id: teamId,
      }),
    {
      enabled: !!teamId,
    },
  );

  const team = teamsRes && teamsRes[0];

  const {data: playersRes, isLoading: arePlayersLoading} = useQuery(
    ['players', {playerId}],
    () =>
      apiRequests.fetchPlayers({
        id: playerId,
      }),
    {
      enabled: !!playerId,
    },
  );

  const player = playersRes && playersRes[0];

  const {data: kpisRes, isLoading: areKpisLoading} = useQuery(
    ['kpis', {kpiId}],
    () =>
      apiRequests.fetchPlayerKpis({
        id: kpiId,
      }),
    {
      enabled: !!kpiId,
    },
  );

  const kpi = kpisRes && kpisRes[0];

  const navigationArray = [
    {
      name: 'Clubs',
      onClick: () => history.push('/structure/clubs/'),
    },
  ];

  if (clubId)
    navigationArray.push({
      name: club?.name,
      onClick: () => history.push(`/structure/clubs/${clubId}/sports`),
    });

  if (sportId)
    navigationArray.push({
      name: sport?.name,
      onClick: () =>
        history.push(`/structure/clubs/${clubId}/sports/${sportId}/pillars`),
    });

  if (pillarId)
    navigationArray.push({
      name: pillar?.name,
      onClick: () =>
        history.push(
          `/structure/clubs/${clubId}/sports/${sportId}/pillars/${pillarId}/teams`,
        ),
    });

  if (teamId)
    navigationArray.push({
      name: team?.name,
      onClick: () =>
        history.push(
          `/structure/clubs/${clubId}/sports/${sportId}/pillars/${pillarId}/teams/${teamId}/players`,
        ),
    });

  if (playerId)
    navigationArray.push({
      name: player?.name,
      onClick: () =>
        history.push(
          `/structure/clubs/${clubId}/sports/${sportId}/pillars/${pillarId}/teams/${teamId}/players/${playerId}/kpis`,
        ),
    });

  if (kpiId)
    navigationArray.push({
      name: kpi?.kpi__name,
      onClick: () =>
        history.push(
          `/structure/clubs/${clubId}/sports/${sportId}/pillars/${pillarId}/teams/${teamId}/players/${playerId}/kpis/${kpiId}`,
        ),
    });

  const isLoading =
    areClubsLoading ||
    areSportsLoading ||
    arePillarsLoading ||
    areTeamsLoading ||
    arePlayersLoading ||
    areKpisLoading;

  if (isLoading) return <CircularProgress size={15} />;

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
      >
        {navigationArray.map((layer, index) =>
          !isNil(layer.id) ? (
            <NavigationLink
              id={layer.id}
              key={layer.id}
              type={layer.type}
              onClick={layer.onClick}
              isLast={navigationArray.length - 1 === index}
              name={layer.name}
            />
          ) : (
            <Link
              underline='hover'
              key={layer.name}
              color='inherit'
              onClick={layer.onClick}
              sx={{
                fontSize: 15,
                cursor: 'pointer',
              }}
            >
              {layer.name}
            </Link>
          ),
        )}
      </Breadcrumbs>
    </Stack>
  );
}
