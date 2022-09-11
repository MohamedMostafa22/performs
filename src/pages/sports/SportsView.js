import {AppEmptyResult, AppLoader} from '@crema';
import {Box} from '@mui/material';
import {useQuery} from 'react-query';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import apiRequests from '../../apiRequests';
import NavigationCrumbs from './NavigationCrumbs';

import ProgressAndIconsGridView from './ProgressAndIconsGridView';

export default function SportsView() {
  const {clubId} = useParams();
  const location = useLocation();
  const history = useHistory();
  const {data, isLoading} = useQuery(['sports', {clubId}], () =>
    apiRequests.fetchSports({
      club_id: clubId,
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
          items={data?.map((sport) => ({
            id: sport.id,
            name: sport.name,
            progress: Math.round(sport.coverage),
            icon: sport.icon_url,
          }))}
          onClick={(id) => {
            history.push(`${location.pathname}/${id}/pillars`);
          }}
        />
      ) : (
        <AppEmptyResult />
      )}
    </>
  );
}
