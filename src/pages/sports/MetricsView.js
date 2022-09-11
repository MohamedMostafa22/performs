/* eslint-disable react/prop-types */
import {AppAnimate, AppEmptyResult, AppGridContainer, AppLoader} from '@crema';
import {Box, Grid} from '@mui/material';
import PropTypes from 'prop-types';
import MetricsCard from './MetricsCard';
import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import apiRequests from 'apiRequests';
import NavigationCrumbs from './NavigationCrumbs';

export default function MetricsView() {
  const {kpiId} = useParams();
  const {data: metrics, isLoading} = useQuery(['metrics', kpiId], () =>
    apiRequests.fetchPlayerKpiMetrics({
      player_kpi_id: kpiId,
    }),
  );

  if (isLoading) return <AppLoader />;

  return (
    <>
      <Box mb={8}>
        <NavigationCrumbs />
      </Box>
      <AppAnimate>
        <AppGridContainer>
          {metrics?.length === 0 && <AppEmptyResult />}
          {metrics
            ?.map((x) => ({
              id: x.id,
              name: x.metric__name,
              progress: x.score,
              icon: x.metric__icon_url,
            }))
            .map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={3}>
                  <MetricsCard
                    id={item.id}
                    text={item.name}
                    value={item.name}
                    icon={item.icon}
                    progress={item.progress}
                    bgColor='grey.200'
                  />
                </Grid>
              );
            })}
        </AppGridContainer>
      </AppAnimate>
    </>
  );
}

MetricsView.propTypes = {
  kpiId: PropTypes.string.isRequired,
};
