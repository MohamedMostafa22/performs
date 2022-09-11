import ProgressAndIconsGridView from './ProgressAndIconsGridView';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import apiRequests from 'apiRequests';
import {useQuery} from 'react-query';
import {Box} from '@mui/material';
import NavigationCrumbs from './NavigationCrumbs';
import {AppEmptyResult, AppLoader} from '@crema';

export default function TeamsView() {
  const {pillarId} = useParams();
  const history = useHistory();
  const location = useLocation();
  const {data, isLoading} = useQuery(['teams', {pillarId}], () =>
    apiRequests.fetchTeams({
      pillar_id: pillarId,
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
          items={data?.map((team) => ({
            id: team.id,
            name: team.name,
            progress: Math.round(team.coverage),
            icon: team.icon_url,
          }))}
          onClick={(id) => {
            history.push(`${location.pathname}/${id}/players`);
          }}
        />
      ) : (
        <AppEmptyResult />
      )}
    </>
  );
}
