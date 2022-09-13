import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import apiRequests from "../../apiRequests";
import AppEmptyResult from "../../components/AppEmptyResult";
import AppLoader from "../../components/AppLoader";
import ProgressAndIconsGridView from "./ProgressAndIconsGridView";

export default function ClubsView() {
  const { data, isLoading } = useQuery("clubs", () => apiRequests.fetchClubs());
  const navigate = useNavigate();

  if (isLoading) return <AppLoader />;

  return data?.length > 0 ? (
    <ProgressAndIconsGridView
      items={data?.map((club) => ({
        id: club.id,
        name: club.name,
        progress: Math.round(club.coverage),
        icon: club.icon_url,
        isFullWidth: true,
      }))}
      onClick={(id) => navigate(`${id}/sports`)}
    />
  ) : (
    <AppEmptyResult />
  );
}
