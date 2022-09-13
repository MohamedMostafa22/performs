import { Grid, useTheme } from "@mui/material";
import GraphCard from "./GraphCard";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import isNil from "lodash/isNil";
import AppLoader from "../../components/AppLoader";
import AppGridContainer from "../../components/AppGridContainer";
import apiRequests from "../../apiRequests";

const PlayersDashboard = () => {
  const theme = useTheme();
  const { teamId } = useParams();
  const { data: playersTpm, isLoading } = useQuery(
    ["pillarsDashboard", { teamId }],
    () => apiRequests.fetchPlayersTpm({ team_id: teamId }),
    {
      enabled: !isNil(teamId),
    }
  );

  if (isLoading) return <AppLoader />;

  return (
    <AppGridContainer>
      {playersTpm?.map((player) => (
        <Grid item xs={12} sm={6} md={4} key={player.id}>
          <GraphCard
            graphData={[
              {
                name: "Strengths",
                value: player.strength_count,
                color: theme.palette.analytics.done,
                colorName: theme.palette.analytics.done,
              },
              {
                name: "Moderate",
                value: player.intermediate_count,
                color: theme.palette.analytics.inProgress,
                colorName: theme.palette.analytics.inProgress,
              },
              {
                name: "Weaknesses",
                value: player.weakness_count,
                color: theme.palette.analytics.notStarted,
                colorName: theme.palette.analytics.notStarted,
              },
            ]}
            progress={player.coverage}
            title={player.name}
          />
        </Grid>
      ))}
    </AppGridContainer>
  );
};

export default PlayersDashboard;
