import { Grid, useTheme } from "@mui/material";
import GraphCard from "./GraphCard";
import { useQuery } from "react-query";
import apiRequests from "../../apiRequests";
import { useParams } from "react-router-dom";
import isNil from "lodash/isNil";
import AppLoader from "../../components/AppLoader";
import AppGridContainer from "../../components/AppGridContainer";

const PillarsDashboard = () => {
  const theme = useTheme();
  const { sportId } = useParams();
  const { data: pillarsTpm, isLoading } = useQuery(
    ["pillarsDashboard", { sportId }],
    () => apiRequests.fetchPillarsTpm({ sport_id: sportId }),
    {
      enabled: !isNil(sportId),
    }
  );

  if (isLoading) return <AppLoader />;

  return (
    <AppGridContainer>
      {pillarsTpm?.map((pillar) => (
        <Grid item xs={12} sm={6} md={4} key={pillar.id}>
          <GraphCard
            graphData={[
              {
                name: "Strengths",
                value: pillar.strength_count,
                color: theme.palette.analytics.done,
                colorName: theme.palette.analytics.done,
              },
              {
                name: "Moderate",
                value: pillar.intermediate_count,
                color: theme.palette.analytics.inProgress,
                colorName: theme.palette.analytics.inProgress,
              },
              {
                name: "Weaknesses",
                value: pillar.weakness_count,
                color: theme.palette.analytics.notStarted,
                colorName: theme.palette.analytics.notStarted,
              },
            ]}
            progress={pillar.coverage}
            title={pillar.name}
          />
        </Grid>
      ))}
    </AppGridContainer>
  );
};

export default PillarsDashboard;
