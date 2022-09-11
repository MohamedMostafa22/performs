import {AppEmptyResult, AppLoader} from '@crema';
import {Box} from '@mui/material';
import {useQuery} from 'react-query';
import {useHistory} from 'react-router-dom';
import apiRequests from '../../apiRequests';
import NavigationCrumbs from './NavigationCrumbs';
import ProgressAndIconsGridView from './ProgressAndIconsGridView';

export default function ClubsView() {
  const {data, isLoading} = useQuery('clubs', () => apiRequests.fetchClubs());
  const history = useHistory();

  if (isLoading) return <AppLoader />;

  return (
    <>
      <Box mb={8}>
        <NavigationCrumbs />
      </Box>
      {data?.length > 0 ? (
        <ProgressAndIconsGridView
          items={data?.map((club) => ({
            id: club.id,
            name: club.name,
            progress: Math.round(club.coverage),
            icon: club.icon_url,
            isFullWidth: true,
          }))}
          onClick={(id) => history.push(`${id}/sports`)}
        />
      ) : (
        <AppEmptyResult />
      )}
    </>
  );
}
