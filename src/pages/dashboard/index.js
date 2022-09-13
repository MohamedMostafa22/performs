import { Grid } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import SportsAutoComplete from "./SportsAutoComplete";
import PillarsAutoComplete from "./PillarsAutoComplete";
import TeamsAutoComplete from "./TeamsAutoComplete";
import PlayersAutoComplete from "./PlayersAutoComplete";
import AppGridContainer from "../../components/AppGridContainer";

export default function Dashboard() {
  const navigate = useNavigate();
  const { sportId, pillarId, teamId, playerId } = useParams();

  return (
    <>
      <AppGridContainer
        sx={{
          mb: 8,
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <SportsAutoComplete
            selectedSportId={sportId}
            onChange={(newValue) => {
              if (newValue)
                navigate(`/dashboards/sports/${newValue?.id}/pillars`);
              else navigate(`/dashboards/`);
            }}
          />
        </Grid>
        {sportId && (
          <Grid item xs={12} sm={6} md={3}>
            <PillarsAutoComplete
              selectedSportId={sportId}
              selectedPillarId={pillarId}
              onChange={(newValue) => {
                if (newValue)
                  navigate(
                    `/dashboards/sports/${sportId}/pillars/${newValue?.id}/teams`
                  );
                else navigate(`/dashboards/sports/${sportId}/pillars`);
              }}
            />
          </Grid>
        )}
        {pillarId && (
          <Grid item xs={12} sm={6} md={3}>
            <TeamsAutoComplete
              selectedTeamId={teamId}
              selectedPillarId={pillarId}
              onChange={(newValue) => {
                if (newValue)
                  navigate(
                    `/dashboards/sports/${sportId}/pillars/${pillarId}/teams/${newValue?.id}/players`
                  );
                else
                  navigate(
                    `/dashboards/sports/${sportId}/pillars/${pillarId}/teams`
                  );
              }}
            />
          </Grid>
        )}
        {teamId && (
          <Grid item xs={12} sm={6} md={3}>
            <PlayersAutoComplete
              selectedTeamId={teamId}
              selectedPlayerId={playerId}
              onChange={(newValue) => {
                if (newValue)
                  navigate(
                    `/dashboards/sports/${sportId}/pillars/${pillarId}/teams/${teamId}/players/${newValue?.id}`
                  );
                else
                  navigate(
                    `/dashboards/sports/${sportId}/pillars/${pillarId}/teams/${teamId}/players`
                  );
              }}
            />
          </Grid>
        )}
      </AppGridContainer>

      <Outlet />
    </>
  );
}
