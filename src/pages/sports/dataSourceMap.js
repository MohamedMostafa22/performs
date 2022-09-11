import sports from '../../recoil/sports';
import teams from '../../recoil/teams';
import players from '../../recoil/players';
import kpis from '../../recoil/kpis';
import metrics from '../../recoil/metrics';
import partitions from '../../recoil/partitions';
import coaches from '../../recoil/coaches';
import refereePartitions from '../../recoil/refereePartitions';
import referees from '../../recoil/referees';
import clubs from '../../recoil/clubs';
import belts from '../../recoil/belts';
import championships from '../../recoil/championships';
import clubPartitions from '../../recoil/clubPartitions';
import sponsorships from '../../recoil/sponsorships';
import exams from '../../recoil/exams';
import examsClubs from '../../recoil/examsClubs';
import clubsBelts from '../../recoil/clubsBelts';
import beltsPlayers from '../../recoil/beltsPlayers';
import playersStatuses from '../../recoil/playersStatuses';
import champWeights from '../../recoil/champWeights';
import weightClubs from '../../recoil/weightClubs';
import clubPlayers from '../../recoil/clubPlayers';
import playerResults from '../../recoil/playerResults';

const dataSourceMap = {
  sports: sports,
  teams: teams,
  players: players,
  kpis: kpis,
  metrics: metrics,
  partitions: partitions,
  coaches: coaches,
  'referee-partitions': refereePartitions,
  referees: referees,
  clubs: clubs,
  belts: belts,
  championships: championships,
  clubPartitions: clubPartitions,
  sponsorships: sponsorships,
  exams: exams,
  examsClubs: examsClubs,
  clubsBelts: clubsBelts,
  beltsPlayers: beltsPlayers,
  playersStatuses: playersStatuses,
  champWeights: champWeights,
  weightClubs: weightClubs,
  clubPlayers: clubPlayers,
  playerResults: playerResults,
};

export default dataSourceMap;
