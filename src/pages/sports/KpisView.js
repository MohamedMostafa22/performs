/* eslint-disable react/prop-types */
import {AppAnimate, AppEmptyResult, AppGridContainer, AppLoader} from '@crema';
import {Box, Grid} from '@mui/material';
import PropTypes from 'prop-types';
import KpiCard from './KpiCard';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import apiRequests from 'apiRequests';
import NavigationCrumbs from './NavigationCrumbs';

export default function KpisView() {
  const {playerId} = useParams();
  const history = useHistory();
  const location = useLocation();
  const {data: kpis, isLoading} = useQuery(['kpis', {playerId}], () =>
    apiRequests.fetchPlayerKpis({
      player_id: playerId,
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
          {kpis?.length === 0 && <AppEmptyResult />}
          {kpis
            ?.map((x) => ({
              id: x.id,
              name: x.kpi__name,
              progress: Math.round(x.coverage),
              icon: x.kpi__icon_url,
            }))
            .map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={3}>
                  <KpiCard
                    text={item.name}
                    value={item.name}
                    progress={item.progress}
                    onClick={() => {
                      history.push(`${location.pathname}/${item.id}/metrics`);
                    }}
                    icon={item.icon}
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

KpisView.propTypes = {
  playerId: PropTypes.string.isRequired,
};
