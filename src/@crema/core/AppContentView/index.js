/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {AppSuspense} from '../../index';
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
} from '../../../pages';
import AppFooter from '../AppLayout/components/AppFooter';
import AppErrorBoundary from '../AppErrorBoundary';
import generateRoutes from '../../utility/RouteGenerator';
import {useAuthUser} from '../../utility/AuthHooks';
import Error404 from '../../../pages/errorPages/Error404';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import AppContentViewWrapper from './AppContentViewWrapper';
import {useRecoilState} from 'recoil';
import etfData from '../../../etfData';
import clubData from '../../../clubData';

import {default as existingBelts} from '../../../recoil/belts';
import {default as existingBeltsPlayers} from '../../../recoil/beltsPlayers';
import {default as existingChampionships} from '../../../recoil/championships';
import {default as existingChampWeights} from '../../../recoil/champWeights';
import {default as existingClubPartitions} from '../../../recoil/clubPartitions';
import {default as existingClubPlayers} from '../../../recoil/clubPlayers';
import {default as existingClubs} from '../../../recoil/clubs';
import {default as existingClubsBelts} from '../../../recoil/clubsBelts';
import {default as existingCoaches} from '../../../recoil/coaches';
import {default as existingExams} from '../../../recoil/exams';
import {default as existingExamsClubs} from '../../../recoil/examsClubs';
import {default as existingKpis} from '../../../recoil/kpis';
import {default as existingMetrics} from '../../../recoil/metrics';
import {default as existingPartitions} from '../../../recoil/partitions';
import {default as existingPlayerResults} from '../../../recoil/playerResults';
import {default as existingPlayers} from '../../../recoil/players';
import {default as existingPlayersStatuses} from '../../../recoil/playersStatuses';
import {default as existingRefereePartitions} from '../../../recoil/refereePartitions';
import {default as existingReferees} from '../../../recoil/referees';
import {default as existingSponsorships} from '../../../recoil/sponsorships';
import {default as existingSports} from '../../../recoil/sports';
import {default as existingTeams} from '../../../recoil/teams';
import {default as existingWeightClubs} from '../../../recoil/weightClubs';

const AppContentView = ({sxStyle}) => {
  const {user, isAuthenticated} = useAuthUser();

  const isEtf = user?.email === 'etf@demo.com';
  const isClub = user?.email === 'club@demo.com';

  const dataSource = (isEtf && etfData) || (isClub && clubData);

  const [belts, setBelts] = useRecoilState(existingBelts);
  const [beltsPlayers, setBeltsPlayers] = useRecoilState(existingBeltsPlayers);
  const [championships, setChampionships] = useRecoilState(
    existingChampionships,
  );
  const [champWeights, setChampWeights] = useRecoilState(existingChampWeights);
  const [clubPartitions, setClubPartitions] = useRecoilState(
    existingClubPartitions,
  );
  const [clubPlayers, setClubPlayers] = useRecoilState(existingClubPlayers);
  const [clubs, setClubs] = useRecoilState(existingClubs);
  const [clubsBelts, setClubsBelts] = useRecoilState(existingClubsBelts);
  const [coaches, setCoaches] = useRecoilState(existingCoaches);
  const [exams, setExams] = useRecoilState(existingExams);
  const [examsClubs, setExamsClubs] = useRecoilState(existingExamsClubs);
  const [kpis, setKpis] = useRecoilState(existingKpis);
  const [metrics, setMetrics] = useRecoilState(existingMetrics);
  const [partitions, setPartitions] = useRecoilState(existingPartitions);
  const [playerResults, setPlayerResults] = useRecoilState(
    existingPlayerResults,
  );
  const [players, setPlayers] = useRecoilState(existingPlayers);
  const [playersStatuses, setPlayersStatuses] = useRecoilState(
    existingPlayersStatuses,
  );
  const [refereePartitions, setRefereePartitions] = useRecoilState(
    existingRefereePartitions,
  );
  const [referees, setReferees] = useRecoilState(existingReferees);
  const [sponsorships, setSponsorships] = useRecoilState(existingSponsorships);
  const [sports, setSports] = useRecoilState(existingSports);
  const [teams, setTeams] = useRecoilState(existingTeams);
  const [weightClubs, setWeightClubs] = useRecoilState(existingWeightClubs);

  useEffect(() => {
    setBelts(dataSource.belts);
    setBeltsPlayers(dataSource.beltsPlayers);
    setChampionships(dataSource.championships);
    setChampWeights(dataSource.champWeights);
    setClubPartitions(dataSource.clubPartitions);
    setClubPlayers(dataSource.clubPlayers);
    setClubs(dataSource.clubs);
    setClubsBelts(dataSource.clubsBelts);
    setCoaches(dataSource.coaches);
    setExams(dataSource.exams);
    setExamsClubs(dataSource.examsClubs);
    setKpis(dataSource.kpis);
    setMetrics(dataSource.metrics);
    setPartitions(dataSource.partitions);
    setPlayerResults(dataSource.playerResults);
    setPlayers(dataSource.players);
    setPlayersStatuses(dataSource.playersStatuses);
    setReferees(dataSource.referees);
    setSponsorships(dataSource.sponsorships);
    setRefereePartitions(dataSource.refereePartitions);
    setSports(dataSource.sports);
    setTeams(dataSource.teams);
    setWeightClubs(dataSource.weightClubs);
  }, []);

  return (
    <AppContentViewWrapper className='app-content-view'>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          p: {xs: 5, md: 7.5, xl: 12.5},
          ...sxStyle,
        }}
        className='app-content'
      >
        <AppSuspense>
          <AppErrorBoundary>
            <Switch>
              {generateRoutes({
                isAuthenticated: isAuthenticated,
                userRole: user?.role,
                unAuthorizedStructure,
                authorizedStructure,
                anonymousStructure,
              })}
              <Route path='/'>
                <Error404 />
              </Route>
            </Switch>
          </AppErrorBoundary>
        </AppSuspense>
      </Box>
      <AppFooter />
    </AppContentViewWrapper>
  );
};

export default AppContentView;

AppContentView.propTypes = {
  sxStyle: PropTypes.object,
};
