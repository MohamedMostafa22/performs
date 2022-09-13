import ProgressAndIconsGridView from "./ProgressAndIconsGridView";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import apiRequests from "../../apiRequests";
import AppLoader from "../../components/AppLoader";
import AppEmptyResult from "../../components/AppEmptyResult";

export default function TeamsView() {
  const { pillarId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading } = useQuery(["teams", { pillarId }], () =>
    apiRequests.fetchTeams({
      pillar_id: pillarId,
    })
  );

  if (isLoading) return <AppLoader />;

  return data?.length > 0 ? (
    <ProgressAndIconsGridView
      items={data?.map((team) => ({
        id: team.id,
        name: team.name,
        progress: Math.round(team.coverage),
        icon: team.icon_url,
      }))}
      onClick={(id) => {
        navigate(`${location.pathname}/${id}/players`);
      }}
    />
  ) : (
    <AppEmptyResult />
  );
}
