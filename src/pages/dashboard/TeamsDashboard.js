import {AppGridContainer, AppLoader} from '@crema';
import {Grid, useTheme} from '@mui/material';
import GraphCard from './GraphCard';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import apiRequests from 'apiRequests';
import isNil from 'lodash/isNil';

const TeamsDashboard = () => {
  const theme = useTheme();
  const {pillarId} = useParams();
  const {data: teamsTpm, isLoading} = useQuery(
    ['teamsDashboard', {pillarId}],
    () => apiRequests.fetchTeamsTpm({pillar_id: pillarId}),
    {
      enabled: !isNil(pillarId),
    },
  );

  if (isLoading) return <AppLoader />;

  return (
    <AppGridContainer>
      {teamsTpm?.map((team) => (
        <Grid item xs={12} sm={6} md={4} key={team.id}>
          <GraphCard
            graphData={[
              {
                name: 'Strengths',
                value: team.strength_count,
                color: theme.palette.analytics.done,
                colorName: theme.palette.analytics.done,
              },
              {
                name: 'Moderate',
                value: team.intermediate_count,
                color: theme.palette.analytics.inProgress,
                colorName: theme.palette.analytics.inProgress,
              },
              {
                name: 'Weaknesses',
                value: team.weakness_count,
                color: theme.palette.analytics.notStarted,
                colorName: theme.palette.analytics.notStarted,
              },
            ]}
            progress={team.coverage}
            title={team.name}
          />
        </Grid>
      ))}
    </AppGridContainer>
  );
};

export default TeamsDashboard;

TeamsDashboard.defaultProps = {
  isCoach: false,
};

TeamsDashboard.propTypes = {
  sportId: PropTypes.string.isRequired,
  isCoach: PropTypes.bool,
};
