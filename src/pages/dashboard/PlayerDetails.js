import { Grid, useMediaQuery, useTheme } from "@mui/material";
import SummaryCard from "./SummaryCard";
import { GiMuscleUp } from "react-icons/gi";
import { GiBrokenShield } from "react-icons/gi";
import { MdPendingActions } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { lightBlue, purple, red } from "@mui/material/colors";
import MetricsTable from "./MetricsTable";
import ActionsList from "./ActionsList";
import isNil from "lodash/isNil";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { forwardRef } from "react";
import AppLoader from "../../components/AppLoader";
import AppCard from "../../components/AppCard";
import apiRequests from "../../apiRequests";
import { backgroundLight } from "../../theme";
import VideoCall from "./VideoCall";
import SaleStatics from "./SaleStatics";

const PlayerDetails = forwardRef(({ isExporting = false, playerId }, ref) => {
  const theme = useTheme();

  const { data: playersTpm, isLoading: arePlayerTpmsLoading } = useQuery(
    ["playersTpm", { playerId }],
    () => apiRequests.fetchPlayersTpm({ id: playerId }),
    {
      enabled: !isNil(playerId),
    }
  );

  const playerTpm = playersTpm && playersTpm[0];

  const { data: playerDetails, isLoading: arePlayerDetailsLoading } = useQuery(
    ["playerDetails", { playerId }],
    () => apiRequests.fetchPlayerDetails({ player_id: playerId }),
    {
      enabled: !isNil(playerId),
    }
  );

  // useEffect(() => {
  //   const resizeObserver = new ResizeObserver((event) => {
  //     onDimensionsChange(
  //       event[0].contentBoxSize[0].inlineSize,
  //       event[0].contentBoxSize[0].blockSize,
  //     );
  //   });
  //   const elem = ref.current;

  //   resizeObserver.observe(document.getElementById('player-details'));
  // });

  const isLoading = arePlayerTpmsLoading || arePlayerDetailsLoading;
  const isMDDown = useMediaQuery((theme) => theme.breakpoints.down("md"));

  if (isLoading) return <AppLoader />;

  const playerData =
    playerDetails?.player?.data && playerDetails?.player?.data[0];
  const playerKpis = playerDetails?.kpis?.data;
  const playerMetrics = playerDetails?.metrics?.data;
  const playerActions = playerDetails?.actions?.data;
  const playerRecommendations = playerDetails?.recommendations?.data;
  const playerStrengthsCount = playerTpm?.strength_count;
  const playerWeaknessesCount = playerTpm?.weakness_count;

  const formattedMetrics = playerMetrics?.map((metric) => ({
    ...metric,
    name: metric.metric__name,
  }));

  return (
    <Grid
      container
      spacing={isMDDown ? 5 : 8}
      ref={ref}
      sx={{
        backgroundColor: backgroundLight.default,
        pr: isExporting ? (isMDDown ? 5 * 1.5 : 8 * 1.5) : 0,
        pb: isExporting && 8,
      }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard
          primaryText={playerStrengthsCount}
          secondaryText="Strengths"
          bgColor="success.light"
          icon={<GiMuscleUp size="2em" color={theme.palette.success.main} />}
          shouldHaveBorder={isExporting}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard
          primaryText={playerWeaknessesCount}
          secondaryText="Weaknesses"
          bgColor={red[50]}
          icon={<GiBrokenShield size="2em" color={theme.palette.error.main} />}
          shouldHaveBorder={isExporting}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard
          primaryText={playerActions?.length}
          secondaryText="Actions"
          bgColor={lightBlue[50]}
          icon={<MdPendingActions size="2em" color={lightBlue[500]} />}
          shouldHaveBorder={isExporting}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard
          primaryText={playerRecommendations?.length}
          secondaryText="Recommendations"
          bgColor={purple[50]}
          icon={<BiLike size="2em" color={purple[500]} />}
          shouldHaveBorder={isExporting}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <VideoCall playerData={playerData} shouldHaveBorder={isExporting} />
      </Grid>
      <Grid item xs={12} md={9}>
        <SaleStatics
          kpis={playerKpis?.map((kpi) => ({
            name: kpi.kpi__name,
            progress: kpi.coverage,
          }))}
          shouldHaveBorder={isExporting}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <AppCard
          title="Strengths"
          titleStyle={{
            color: "analytics.done",
          }}
          sxStyle={{
            height: isExporting ? "auto" : 400,
            overflow: "auto",
            border: isExporting && "1px solid",
            borderColor: "grey.200",
          }}
        >
          <MetricsTable
            metrics={formattedMetrics?.filter((metric) => metric.level === "s")}
          />
        </AppCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <AppCard
          title="Weaknesses"
          titleStyle={{
            color: "analytics.notStarted",
          }}
          sxStyle={{
            height: isExporting ? "auto" : 400,
            overflow: "auto",
            border: isExporting && "1px solid",
            borderColor: "grey.200",
          }}
        >
          <MetricsTable
            metrics={formattedMetrics?.filter((metric) => metric.level === "w")}
          />
        </AppCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <AppCard
          title="Moderate"
          titleStyle={{
            color: "analytics.inProgress",
          }}
          sxStyle={{
            height: isExporting ? "auto" : 400,
            overflow: "auto",
            border: isExporting && "1px solid",
            borderColor: "grey.200",
          }}
        >
          <MetricsTable
            metrics={formattedMetrics?.filter((metric) => metric.level === "i")}
          />
        </AppCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <AppCard
          title="Recommendations"
          sxStyle={{
            height: isExporting ? "auto" : 400,
            overflow: "auto",
            border: isExporting && "1px solid",
            borderColor: "grey.200",
          }}
        >
          <ActionsList
            items={playerRecommendations?.map((action) => ({
              id: action.id,
              primaryText: action.name,
              secondaryText: action.description,
            }))}
          />
        </AppCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <AppCard
          title="Actions"
          sxStyle={{
            height: isExporting ? "auto" : 400,
            overflow: "auto",
            border: isExporting && "1px solid",
            borderColor: "grey.200",
          }}
        >
          <ActionsList
            items={playerActions?.map((action) => ({
              id: action.id,
              primaryText: action.name,
              secondaryText: action.description,
            }))}
          />
        </AppCard>
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <AppCard
          title='Achievements'
          sxStyle={{
            height: 400,
          }}
        >
          <ActionsList
            items={playerData.recommendations.map((action) => ({
              id: action.id,
              primaryText: action.name,
              secondaryText: action.description,
            }))}
          />
        </AppCard>
      </Grid> */}
    </Grid>
  );
});

export default PlayerDetails;
