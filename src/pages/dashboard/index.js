import {AppGridContainer} from '@crema';
import {Grid} from '@mui/material';
import PlayerDetails from './PlayerDetails';
import SportsDashboard from './SportsDashboard';
import TeamsDashboard from './TeamsDashboard';
import PlayersDashboard from './PlayersDashboard';
import {Route, Switch, useHistory, useParams} from 'react-router-dom';
import PillarsDashboard from './PillarsDashboard';
import SportsAutoComplete from './SportsAutoComplete';
import PillarsAutoComplete from './PillarsAutoComplete';
import TeamsAutoComplete from './TeamsAutoComplete';
import PlayersAutoComplete from './PlayersAutoComplete';

export default function Dashboard() {
  const history = useHistory();
  const params = useParams();

  const {sportId, pillarId, teamId, playerId} = (() => {
    const idsString = params && params['0'];
    const splitParams = idsString && idsString.split('/');
    if (!Array.isArray(splitParams)) return {};
    const pillarsIndex = splitParams.findIndex((item) => item === 'pillars');
    const teamsIndex = splitParams.findIndex((item) => item === 'teams');
    const playersIndex = splitParams.findIndex((item) => item === 'players');

    const sportId = splitParams[1];
    const pillarId = pillarsIndex > 0 && splitParams[pillarsIndex + 1];
    const teamId = teamsIndex > 0 && splitParams[teamsIndex + 1];
    const playerId = playersIndex > 0 && splitParams[playersIndex + 1];

    return {
      sportId,
      pillarId,
      teamId,
      playerId,
    };
  })();

  return (
    <>
      <AppGridContainer
        sx={{
          mb: 8,
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <SportsAutoComplete
            selectedSportId={sportId}
            onChange={(newValue) => {
              if (newValue)
                history.push(
                  `/players-dashboard/sports/${newValue?.id}/pillars`,
                );
              else history.push(`/players-dashboard/`);
            }}
          />
        </Grid>
        {sportId && (
          <Grid item xs={12} sm={6} md={3}>
            <PillarsAutoComplete
              selectedSportId={sportId}
              selectedPillarId={pillarId}
              onChange={(newValue) => {
                if (newValue)
                  history.push(
                    `/players-dashboard/sports/${sportId}/pillars/${newValue?.id}/teams`,
                  );
                else
                  history.push(`/players-dashboard/sports/${sportId}/pillars`);
              }}
            />
          </Grid>
        )}
        {pillarId && (
          <Grid item xs={12} sm={6} md={3}>
            <TeamsAutoComplete
              selectedTeamId={teamId}
              selectedPillarId={pillarId}
              onChange={(newValue) => {
                if (newValue)
                  history.push(
                    `/players-dashboard/sports/${sportId}/pillars/${pillarId}/teams/${newValue?.id}/players`,
                  );
                else
                  history.push(
                    `/players-dashboard/sports/${sportId}/pillars/${pillarId}/teams`,
                  );
              }}
            />
          </Grid>
        )}
        {teamId && (
          <Grid item xs={12} sm={6} md={3}>
            <PlayersAutoComplete
              selectedTeamId={teamId}
              selectedPlayerId={playerId}
              onChange={(newValue) => {
                if (newValue)
                  history.push(
                    `/players-dashboard/sports/${sportId}/pillars/${pillarId}/teams/${teamId}/players/${newValue?.id}`,
                  );
                else
                  history.push(
                    `/players-dashboard/sports/${sportId}/pillars/${pillarId}/teams/${teamId}/players`,
                  );
              }}
            />
          </Grid>
        )}
      </AppGridContainer>

      <Switch>
        <Route path='/players-dashboard/' exact>
          <SportsDashboard />
        </Route>
        <Route path='/players-dashboard/sports/:sportId/pillars' exact>
          <PillarsDashboard />
        </Route>
        <Route
          path='/players-dashboard/sports/:sportId/pillars/:pillarId/teams'
          exact
        >
          <TeamsDashboard />
        </Route>
        <Route
          path='/players-dashboard/sports/:sportId/pillars/:pillarId/teams/:teamId/players'
          exact
        >
          <PlayersDashboard />
        </Route>
        <Route
          path='/players-dashboard/sports/:sportId/pillars/:pillarId/teams/:teamId/players/:playerId'
          exact
        >
          <PlayerDetails />
        </Route>
      </Switch>
    </>
  );
}
