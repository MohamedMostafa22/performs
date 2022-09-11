import {AppCard, AppGridContainer, AppLoader} from '@crema';
import {Grid, useMediaQuery, useTheme} from '@mui/material';
import SaleStatics from 'pages/dashboards/ECommerce/SaleStatics';
import SummaryCard from './SummaryCard';
import {GiMuscleUp} from 'react-icons/gi';
import {GiBrokenShield} from 'react-icons/gi';
import {MdPendingActions} from 'react-icons/md';
import {BiLike} from 'react-icons/bi';
import {lightBlue, purple, red} from '@mui/material/colors';
import VideoCall from 'pages/apps/Wall/VideoCall';
import MetricsTable from './MetricsTable';
import ActionsList from './ActionsList';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';
import {useQuery} from 'react-query';
import apiRequests from 'apiRequests';
import {useParams} from 'react-router-dom';
import {forwardRef, useEffect} from 'react';
import exportToPdf from '../../@crema/utility/exportToPdf';

const PlayerDetails = forwardRef(({isExporting}, ref) => {
  const theme = useTheme();
  const {playerId} = useParams();

  const {data: playersTpm, isLoading: arePlayerTpmsLoading} = useQuery(
    ['playersTpm', {playerId}],
    () => apiRequests.fetchPlayersTpm({id: playerId}),
    {
      enabled: !isNil(playerId),
    },
  );

  const playerTpm = playersTpm && playersTpm[0];

  const {data: playerDetails, isLoading: arePlayerDetailsLoading} = useQuery(
    ['playerDetails', {playerId}],
    () => apiRequests.fetchPlayerDetails({player_id: playerId}),
    {
      enabled: !isNil(playerId),
    },
  );

  // useEffect(() => {
  //   const resizeObserver = new ResizeObserver((event) => {
  //     onDimensionsChange(
  //       event[0].contentBoxSize[0].inlineSize,
  //       event[0].contentBoxSize[0].blockSize,
  //     );
  //   });
  //   const elem = ref.current;

  //   resizeObserver.observe(document.getElementById('player-details'));
  // });

  const isLoading = arePlayerTpmsLoading || arePlayerDetailsLoading;
  const isMDDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  if (isLoading) return <AppLoader />;

  const playerData =
    playerDetails?.player?.data && playerDetails?.player?.data[0];
  const playerKpis = playerDetails?.kpis?.data;
  const playerMetrics = playerDetails?.metrics?.data;
  const playerActions = playerDetails?.actions?.data;
  const playerRecommendations = playerDetails?.recommendations?.data;
  const playerStrengthsCount = playerTpm?.strength_count;
  const playerWeaknessesCount = playerTpm?.weakness_count;

  const formattedMetrics = playerMetrics?.map((metric) => ({
    ...metric,
    name: metric.metric__name,
  }));

  return (
    <Grid container spacing={isMDDown ? 5 : 8} ref={ref}>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard
          primaryText={playerStrengthsCount}
          secondaryText='Strengths'
          bgColor='success.light'
          icon={<GiMuscleUp size='2em' color={theme.palette.success.main} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard
          primaryText={playerWeaknessesCount}
          secondaryText='Weaknesses'
          bgColor={red[50]}
          icon={<GiBrokenShield size='2em' color={theme.palette.error.main} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard
          primaryText={playerActions?.length}
          secondaryText='Actions'
          bgColor={lightBlue[50]}
          icon={<MdPendingActions size='2em' color={lightBlue[500]} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard
          primaryText={playerRecommendations?.length}
          secondaryText='Recommendations'
          bgColor={purple[50]}
          icon={<BiLike size='2em' color={purple[500]} />}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <VideoCall playerData={playerData} />
      </Grid>
      <Grid item xs={12} md={9}>
        <SaleStatics
          kpis={playerKpis?.map((kpi) => ({
            name: kpi.kpi__name,
            progress: kpi.coverage,
          }))}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <AppCard
          title='Strengths'
          titleStyle={{
            color: 'analytics.done',
          }}
          sxStyle={{
            height: isExporting ? 'auto' : 400,
            overflow: 'auto',
          }}
        >
          <MetricsTable
            metrics={formattedMetrics?.filter((metric) => metric.level === 's')}
          />
        </AppCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <AppCard
          title='Weaknesses'
          titleStyle={{
            color: 'analytics.notStarted',
          }}
          sxStyle={{
            height: isExporting ? 'auto' : 400,
            overflow: 'auto',
          }}
        >
          <MetricsTable
            metrics={formattedMetrics?.filter((metric) => metric.level === 'w')}
          />
        </AppCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <AppCard
          title='Moderate'
          titleStyle={{
            color: 'analytics.inProgress',
          }}
          sxStyle={{
            height: isExporting ? 'auto' : 400,
            overflow: 'auto',
          }}
        >
          <MetricsTable
            metrics={formattedMetrics?.filter((metric) => metric.level === 'i')}
          />
        </AppCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <AppCard
          title='Recommendations'
          sxStyle={{
            height: isExporting ? 'auto' : 400,
            overflow: 'auto',
          }}
        >
          <ActionsList
            items={playerRecommendations?.map((action) => ({
              id: action.id,
              primaryText: action.name,
              secondaryText: action.description,
            }))}
          />
        </AppCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <AppCard
          title='Actions'
          sxStyle={{
            height: isExporting ? 'auto' : 400,
            overflow: 'auto',
          }}
        >
          <ActionsList
            items={playerActions?.map((action) => ({
              id: action.id,
              primaryText: action.name,
              secondaryText: action.description,
            }))}
          />
        </AppCard>
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <AppCard
          title='Achievements'
          sxStyle={{
            height: 400,
          }}
        >
          <ActionsList
            items={playerData.recommendations.map((action) => ({
              id: action.id,
              primaryText: action.name,
              secondaryText: action.description,
            }))}
          />
        </AppCard>
      </Grid> */}
    </Grid>
  );
});

export default PlayerDetails;

PlayerDetails.propTypes = {
  playerId: PropTypes.string.isRequired,
};
