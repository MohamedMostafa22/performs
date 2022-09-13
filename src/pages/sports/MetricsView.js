/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import MetricsCard from "./MetricsCard";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import AppLoader from "../../components/AppLoader";
import AppAnimate from "../../components/AppAnimate";
import AppGridContainer from "../../components/AppGridContainer";
import AppEmptyResult from "../../components/AppEmptyResult";
import apiRequests from "../../apiRequests";

export default function MetricsView() {
  const { kpiId } = useParams();
  const { data: metrics, isLoading } = useQuery(["metrics", kpiId], () =>
    apiRequests.fetchPlayerKpiMetrics({
      player_kpi_id: kpiId,
    })
  );

  if (isLoading) return <AppLoader />;

  return (
    <AppAnimate>
      <AppGridContainer>
        {metrics?.length === 0 && <AppEmptyResult />}
        {metrics
          ?.map((x) => ({
            id: x.id,
            name: x.metric__name,
            progress: x.score,
            icon: x.metric__icon_url,
          }))
          .map((item) => {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <MetricsCard
                  id={item.id}
                  text={item.name}
                  value={item.name}
                  icon={item.icon}
                  progress={item.progress}
                  bgColor="grey.200"
                />
              </Grid>
            );
          })}
      </AppGridContainer>
    </AppAnimate>
  );
}
