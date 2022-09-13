import ProgressAndIconsGridView from "./ProgressAndIconsGridView";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import AppLoader from "../../components/AppLoader";
import AppEmptyResult from "../../components/AppEmptyResult";
import apiRequests from "../../apiRequests";

export default function PlayersView() {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading } = useQuery(["players", { teamId }], () =>
    apiRequests.fetchPlayers({
      team_id: teamId,
    })
  );

  if (isLoading) return <AppLoader />;

  return data?.length > 0 ? (
    <ProgressAndIconsGridView
      items={data?.map((kpi) => ({
        id: kpi.id,
        name: kpi.name,
        progress: Math.round(kpi.coverage),
        icon: kpi.icon_url,
        isFullWidth: true,
      }))}
      onClick={(id) => {
        navigate(`${location.pathname}/${id}/kpis`);
      }}
    />
  ) : (
    <AppEmptyResult />
  );
}
