import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import apiRequests from "../../apiRequests";
import AppEmptyResult from "../../components/AppEmptyResult";
import AppLoader from "../../components/AppLoader";

import ProgressAndIconsGridView from "./ProgressAndIconsGridView";

export default function SportsView() {
  const { clubId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(["sports", { clubId }], () =>
    apiRequests.fetchSports({
      club_id: clubId,
    })
  );

  if (isLoading) return <AppLoader />;

  return data?.length > 0 ? (
    <ProgressAndIconsGridView
      items={data?.map((sport) => ({
        id: sport.id,
        name: sport.name,
        progress: Math.round(sport.coverage),
        icon: sport.icon_url,
      }))}
      onClick={(id) => {
        navigate(`${location.pathname}/${id}/pillars`);
      }}
    />
  ) : (
    <AppEmptyResult />
  );
}
