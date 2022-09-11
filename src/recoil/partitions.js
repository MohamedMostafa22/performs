import {atom} from 'recoil';
// import coach from '../img/coach.png';
// import clubsIcon from '../img/clubs.png';
// import maleTeam from '../img/male-team.png';
// import refereesIcon from '../img/referees.png';
// import beltsIcon from '../img/belts.png';
// import ChampionshipsIcon from '../img/championships.png';
// import playersIcon from '../img/players.png';
// import sponsorship from '../img/sponsorship.png';

const partitions = atom({
  key: 'partitions',
  default: [
    // {
    //   id: 0,
    //   type: 'partitions',
    //   name: 'National Teams',
    //   progress: 60,
    //   icon: maleTeam,
    //   children: {
    //     type: 'teams',
    //     ids: [0, 1, 2, 3, 4, 5],
    //   },
    // },
    // {
    //   id: 1,
    //   type: 'partitions',
    //   name: 'Coaches',
    //   progress: 50,
    //   icon: coach,
    //   children: {
    //     type: 'coaches',
    //     ids: [0, 1, 2],
    //   },
    // },
    // {
    //   id: 2,
    //   type: 'partitions',
    //   name: 'Referees',
    //   progress: 80,
    //   icon: refereesIcon,
    //   children: {
    //     type: 'referee-partitions',
    //     ids: [0, 1],
    //   },
    // },
    // {
    //   id: 3,
    //   type: 'partitions',
    //   name: 'Belts',
    //   progress: 100,
    //   icon: beltsIcon,
    //   children: {
    //     type: 'exams',
    //     ids: [0, 1, 2, 3],
    //   },
    // },
    // {
    //   id: 4,
    //   type: 'partitions',
    //   name: 'Clubs',
    //   progress: 84,
    //   icon: clubsIcon,
    //   children: {
    //     type: 'clubs',
    //     ids: [0, 1, 2, 3, 4, 5],
    //   },
    // },
    // {
    //   id: 5,
    //   type: 'partitions',
    //   name: 'Players',
    //   progress: 40,
    //   icon: playersIcon,
    //   children: {
    //     type: 'players',
    //     ids: [0, 1, 2, 3],
    //   },
    // },
    // {
    //   id: 6,
    //   type: 'partitions',
    //   name: 'Championships',
    //   progress: 100,
    //   icon: ChampionshipsIcon,
    //   children: {
    //     type: 'championships',
    //     ids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    //   },
    // },
    // {
    //   id: 7,
    //   type: 'partitions',
    //   name: 'sponsorships',
    //   progress: 100,
    //   icon: sponsorship,
    //   children: {
    //     type: 'sponsorships',
    //     ids: [0, 1, 2],
    //   },
    // },
  ],
});

export default partitions;
