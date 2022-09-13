import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import apiRequests from "../../apiRequests";
import AppEmptyResult from "../../components/AppEmptyResult";
import AppLoader from "../../components/AppLoader";

import ProgressAndIconsGridView from "./ProgressAndIconsGridView";

export default function PillarsView() {
  const { sportId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading } = useQuery(["pillars", { sportId }], () =>
    apiRequests.fetchPillars({
      sport_id: sportId,
    })
  );

  if (isLoading) return <AppLoader />;

  return data?.length > 0 ? (
    <ProgressAndIconsGridView
      items={data?.map((pillar) => ({
        id: pillar.id,
        name: pillar.name,
        progress: Math.round(pillar.coverage),
        icon: pillar.icon_url,
      }))}
      onClick={(id) => {
        navigate(`${location.pathname}/${id}/teams`);
      }}
    />
  ) : (
    <AppEmptyResult />
  );
}
