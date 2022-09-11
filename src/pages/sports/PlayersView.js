import ProgressAndIconsGridView from './ProgressAndIconsGridView';

import {useHistory, useLocation, useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import apiRequests from 'apiRequests';
import {Box} from '@mui/material';
import NavigationCrumbs from './NavigationCrumbs';
import {AppEmptyResult, AppLoader} from '@crema';

export default function PlayersView() {
  const {teamId} = useParams();
  const history = useHistory();
  const location = useLocation();
  const {data, isLoading} = useQuery(['players', {teamId}], () =>
    apiRequests.fetchPlayers({
      team_id: teamId,
    }),
  );

  if (isLoading) return <AppLoader />;

  return (
    <>
      <Box mb={8}>
        <NavigationCrumbs />
      </Box>
      {data?.length > 0 ? (
        <ProgressAndIconsGridView
          items={data?.map((kpi) => ({
            id: kpi.id,
            name: kpi.name,
            progress: Math.round(kpi.coverage),
            icon: kpi.icon_url,
            isFullWidth: true,
          }))}
          onClick={(id) => {
            history.push(`${location.pathname}/${id}/kpis`);
          }}
        />
      ) : (
        <AppEmptyResult />
      )}
    </>
  );
}
