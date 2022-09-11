import {AppEmptyResult, AppLoader} from '@crema';
import {Box} from '@mui/material';
import {useQuery} from 'react-query';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import apiRequests from '../../apiRequests';
import NavigationCrumbs from './NavigationCrumbs';

import ProgressAndIconsGridView from './ProgressAndIconsGridView';

export default function PillarsView() {
  const {sportId} = useParams();
  const history = useHistory();
  const location = useLocation();
  const {data, isLoading} = useQuery(['pillars', {sportId}], () =>
    apiRequests.fetchPillars({
      sport_id: sportId,
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
          items={data?.map((pillar) => ({
            id: pillar.id,
            name: pillar.name,
            progress: Math.round(pillar.coverage),
            icon: pillar.icon_url,
          }))}
          onClick={(id) => {
            history.push(`${location.pathname}/${id}/teams`);
          }}
        />
      ) : (
        <AppEmptyResult />
      )}
    </>
  );
}
