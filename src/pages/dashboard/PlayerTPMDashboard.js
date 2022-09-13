import { useParams } from "react-router-dom";
import PlayerDetails from "./PlayerDetails";

export default function PlayerTPMDashboard() {
  const { playerId } = useParams();
  return <PlayerDetails playerId={playerId} />;
}
