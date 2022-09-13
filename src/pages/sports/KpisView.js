/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import KpiCard from "./KpiCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import AppLoader from "../../components/AppLoader";
import AppAnimate from "../../components/AppAnimate";
import AppGridContainer from "../../components/AppGridContainer";
import AppEmptyResult from "../../components/AppEmptyResult";
import apiRequests from "../../apiRequests";

export default function KpisView() {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { data: kpis, isLoading } = useQuery(["kpis", { playerId }], () =>
    apiRequests.fetchPlayerKpis({
      player_id: playerId,
    })
  );

  if (isLoading) return <AppLoader />;

  return (
    <AppAnimate>
      <AppGridContainer>
        {kpis?.length === 0 && <AppEmptyResult />}
        {kpis
          ?.map((x) => ({
            id: x.id,
            name: x.kpi__name,
            progress: Math.round(x.coverage),
            icon: x.kpi__icon_url,
          }))
          .map((item) => {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <KpiCard
                  text={item.name}
                  value={item.name}
                  progress={item.progress}
                  onClick={() => {
                    navigate(`${location.pathname}/${item.id}/metrics`);
                  }}
                  icon={item.icon}
                  bgColor="grey.200"
                />
              </Grid>
            );
          })}
      </AppGridContainer>
    </AppAnimate>
  );
}
