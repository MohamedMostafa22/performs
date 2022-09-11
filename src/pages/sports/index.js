import {Switch, Route} from 'react-router-dom';
import KpisView from './KpisView';
import MetricsView from './MetricsView';
import {Box} from '@mui/material';
import ClubsView from './ClubsView';
import SportsView from './SportsView';
import PillarsView from './PillarsView';
import TeamsView from './TeamsView';
import PlayersView from './PlayersView';

export default function Sports() {
  return (
    <>
      <Box
        sx={{
          mb: 8,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* <Box>
          <Button
            variant='outlined'
            color='primary'
            sx={{
              padding: '8px 28px',
              borderRadius: 8,
              '& .MuiSvgIcon-root': {
                fontSize: 26,
              },
            }}
            startIcon={<AddIcon />}
            onClick={() => setOpen(true)}
            disabled={!canAdd}
          >
            Add
          </Button>
        </Box> */}
      </Box>
      <Switch>
        <Route path='/structure/clubs/' exact>
          <ClubsView />
        </Route>
        <Route path='/structure/clubs/:clubId/sports' exact>
          <SportsView />
        </Route>
        <Route path='/structure/clubs/:clubId/sports/:sportId/pillars' exact>
          <PillarsView />
        </Route>
        <Route
          path='/structure/clubs/:clubId/sports/:sportId/pillars/:pillarId/teams'
          exact
        >
          <TeamsView />
        </Route>
        <Route
          path='/structure/clubs/:clubId/sports/:sportId/pillars/:pillarId/teams/:teamId/players'
          exact
        >
          <PlayersView />
        </Route>
        <Route
          path='/structure/clubs/:clubId/sports/:sportId/pillars/:pillarId/teams/:teamId/players/:playerId/kpis'
          exact
        >
          <KpisView />
        </Route>
        <Route
          path='/structure/clubs/:clubId/sports/:sportId/pillars/:pillarId/teams/:teamId/players/:playerId/kpis/:kpiId/metrics'
          exact
        >
          <MetricsView />
        </Route>
      </Switch>
      {/* {children && childrenType !== 'kpis' && childrenType !== 'metrics' && (
        <ProgressAndIconsGridView
          items={children}
          onClick={({type, id}) => {
            history.push(`${location.pathname}${type}/${id}/`);
          }}
        />
      )}
      {!currentLayerItem && (
        <ProgressAndIconsGridView
          items={sports}
          onClick={({id}) => {
            history.push(`${id}`);
          }}
        />
      )} */}
      {/* {!currentLayerItem && <SportsView sports={sports} />}
      {currentLayerItemData &&
        currentLayerItemData.children &&
        currentLayerItemData.children.type === 'teams' && (
          <TeamsView sportId={currentLayerItem.id} />
        )}
      {currentLayerItemData &&
        currentLayerItemData.children &&
        currentLayerItemData.children.type === 'partitions' && (
          <TeamsView sportId={currentLayerItem.id} />
        )}
      {currentLayerItemData &&
        currentLayerItemData.children &&
        currentLayerItemData.children.type === 'players' && (
          <PlayersView teamId={currentLayerItem.id} />
        )} */}
      {/* {children && childrenType === 'kpis' && <KpisView kpis={children} />}
      {children && childrenType === 'metrics' && (
        <MetricsView metrics={children} />
      )}
      <AddDialog
        open={childrenIds && open}
        onClose={() => setOpen(false)}
        type={childrenType}
      /> */}
    </>
  );
}
