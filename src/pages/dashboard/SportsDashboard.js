import {AppGridContainer, AppLoader} from '@crema';
import {Grid, useTheme} from '@mui/material';
import apiRequests from 'apiRequests';
import {useQuery} from 'react-query';
import GraphCard from './GraphCard';

const SportsDashboard = () => {
  const theme = useTheme();
  const {data: sports, isLoading} = useQuery('sportsDashboard', () =>
    apiRequests.fetchSportsTpm(),
  );

  if (isLoading) return <AppLoader />;

  return (
    <AppGridContainer>
      {sports?.map((sport) => (
        <Grid item xs={12} sm={6} md={4} key={sport.id}>
          <GraphCard
            graphData={[
              {
                name: 'Strengths',
                value: sport.strength_count,
                color: theme.palette.analytics.done,
                colorName: theme.palette.analytics.done,
              },
              {
                name: 'Moderate',
                value: sport.intermediate_count,
                color: theme.palette.analytics.inProgress,
                colorName: theme.palette.analytics.inProgress,
              },
              {
                name: 'Weaknesses',
                value: sport.weakness_count,
                color: theme.palette.analytics.notStarted,
                colorName: theme.palette.analytics.notStarted,
              },
            ]}
            progress={sport.coverage}
            title={sport.name}
          />
        </Grid>
      ))}
    </AppGridContainer>
  );
};

export default SportsDashboard;
