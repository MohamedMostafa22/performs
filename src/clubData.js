import blueBelt from './img/blue-belt.png';
import blackBelt from './img/black-belt.png';
import redBelt from './img/red-belt.png';
import greenBelt from './img/green-belt.png';
import yellowBelt from './img/yellow-belt.png';
import whiteBelt from './img/white-belt.png';
import brownBelt from './img/brown-belt.png';
import player from './img/player.png';
import ChampionshipsIcon from './img/championships.png';
import weight from './img/weight.png';
import coach from './img/coach.png';
import maleTeam from './img/male-team.png';
import elseed from './img/Elseed.png';
import elshams from './img/elshams.jpg';
import heliopolis from './img/heliopolis.jpg';
import sporting from './img/sporting.jpg';
import semoha from './img/semoha.jpg';
import olympic from './img/olympic.jpg';
import exam from './img/exam.png';
import leftLeg from './img/left-leg.png';
import rightLeg from './img/right-leg.png';
import clubsIcon from './img/clubs.png';
import refereesIcon from './img/referees.png';
import beltsIcon from './img/belts.png';
import playersIcon from './img/players.png';
import sponsorship from './img/sponsorship.png';
import result from './img/result.png';
import malak from './img/malak.png';
import seif from './img/seif.png';
import heba from './img/Heba.png';
import yasmine from './img/Yasmine.png';
import pass from './img/pass.png';
import failed from './img/failed.png';
import referee1 from './img/referee1.webp';
import referee2 from './img/referee2.jpg';
import referee3 from './img/referee3.jpg';
import referee4 from './img/referee4.jpg';
import taekwondo from './img/taekwondo.png';
import karate from './img/karate.png';
import weightLifting from './img/weight-lifting.png';
import fencing from './img/fencing.png';
import equestrian from './img/horse-riding.png';
import wrestling from './img/wrestling.png';
import hammerThrow from './img/hammer-throw.png';
import femaleTeam from './img/female-team.png';
import club from './img/clubs.png';
import employees from './img/employees.png';
import achievements from './img/achievements.png';

const belts = [
  {
    id: 0,
    type: 'belts',
    name: 'White',
    icon: whiteBelt,
    progress: 100,
    children: {},
  },
  {
    id: 1,
    type: 'belts',
    name: 'Yellow',
    icon: yellowBelt,
    progress: 100,
    children: {},
  },
  {
    id: 2,
    type: 'belts',
    name: 'Green',
    icon: greenBelt,
    progress: 100,
    children: {},
  },
  {
    id: 3,
    type: 'belts',
    name: 'Blue 1',
    icon: blueBelt,
    progress: 100,
    children: {},
  },
  {
    id: 4,
    type: 'belts',
    name: 'Blue 2',
    icon: blueBelt,
    progress: 100,
    children: {},
  },
  {
    id: 5,
    type: 'belts',
    name: 'Blue 3',
    icon: blueBelt,
    progress: 100,
    children: {},
  },
  {
    id: 6,
    type: 'belts',
    name: 'Brown 1',
    icon: brownBelt,
    progress: 100,
    children: {},
  },
  {
    id: 7,
    type: 'belts',
    name: 'Brown 2',
    icon: brownBelt,
    progress: 100,
    children: {},
  },
  {
    id: 8,
    type: 'belts',
    name: 'Red',
    icon: redBelt,
    progress: 100,
    children: {},
  },
  {
    id: 9,
    type: 'belts',
    name: 'Jr. Black',
    icon: blackBelt,
    progress: 100,
    children: {},
  },
  {
    id: 10,
    type: 'belts',
    name: 'Black',
    icon: blackBelt,
    progress: 100,
    children: {},
  },
];

const beltsPlayers = [
  {
    id: 0,
    type: 'beltsPlayers',
    name: 'Player 1',
    icon: player,
    progress: 100,
    children: {type: 'playersStatuses', ids: [0, 1, 2]},
  },
  {
    id: 1,
    type: 'beltsPlayers',
    name: 'Player 2',
    icon: player,
    progress: 100,
    children: {},
  },
  {
    id: 2,
    type: 'beltsPlayers',
    name: 'Player 3',
    icon: player,
    progress: 100,
    children: {},
  },
];

const championships = [
  {
    id: 0,
    type: 'championships',
    name: '10th Republic',
    icon: ChampionshipsIcon,
    progress: 100,
    children: {},
  },
  {
    id: 1,
    type: 'championships',
    name: '12th Republic',
    icon: ChampionshipsIcon,
    progress: 100,
    children: {},
  },
  {
    id: 2,
    type: 'championships',
    name: '14th Republic',
    icon: ChampionshipsIcon,
    progress: 100,
    children: {},
  },
  {
    id: 3,
    type: 'championships',
    name: '17th Republic',
    icon: ChampionshipsIcon,
    progress: 100,
    children: {},
  },
  {
    id: 4,
    type: 'championships',
    name: '14th Schools',
    icon: ChampionshipsIcon,
    progress: 100,
    children: {},
  },
  {
    id: 5,
    type: 'championships',
    name: '17th Schools',
    icon: ChampionshipsIcon,
    progress: 100,
    children: {},
  },
  {
    id: 6,
    type: 'championships',
    name: '14th National Team',
    icon: ChampionshipsIcon,
    progress: 100,
    children: {},
  },
  {
    id: 7,
    type: 'championships',
    name: '17th National Team',
    icon: ChampionshipsIcon,
    progress: 100,
    children: {},
  },
  {
    id: 8,
    type: 'championships',
    name: 'Poomsae',
    icon: ChampionshipsIcon,
    progress: 100,
    children: {},
  },
];

const champWeights = [
  {
    id: 0,
    type: 'champWeights',
    name: 'Weight 1',
    icon: weight,
    progress: 100,
    children: {
      type: 'weightClubs',
      ids: [0, 1, 2],
    },
  },
  {
    id: 1,
    type: 'champWeights',
    name: 'Weight 2',
    icon: weight,
    progress: 100,
    children: {},
  },
  {
    id: 2,
    type: 'champWeights',
    name: 'Weight 3',
    icon: weight,
    progress: 100,
    children: {},
  },
  {
    id: 3,
    type: 'champWeights',
    name: 'Weight 4',
    icon: weight,
    progress: 100,
    children: {},
  },
];

const clubPartitions = [
  {
    id: 0,
    type: 'clubPartitions',
    name: 'Teams',
    progress: 60,
    icon: maleTeam,
    children: {
      type: 'teams',
      ids: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 1,
    type: 'clubPartitions',
    name: 'Coaches',
    progress: 50,
    icon: coach,
    children: {
      type: 'coaches',
      ids: [0, 1, 2],
    },
  },
];

const clubPlayers = [
  {
    id: 0,
    type: 'clubPlayers',
    name: 'Player 1',
    icon: player,
    progress: 100,
    children: {type: 'playerResults', ids: [0, 1, 2]},
  },
  {
    id: 1,
    type: 'clubPlayers',
    name: 'Player 2',
    icon: player,
    progress: 100,
    children: {},
  },
];

const clubs = [
  {
    id: 0,
    type: 'clubs',
    name: 'Elshams',
    icon: elshams,
    progress: 70,
    isFullWidth: true,
    children: {
      type: 'clubPartitions',
      ids: [0, 1],
    },
  },
  {
    id: 1,
    type: 'clubs',
    name: 'Shooting Club',
    icon: elseed,
    progress: 80,
    isFullWidth: true,
    children: {
      type: 'clubPartitions',
      ids: [0, 1],
    },
  },
  {
    id: 2,
    type: 'clubs',
    name: 'Heliopolis',
    icon: heliopolis,
    progress: 68,
    isFullWidth: true,
    children: {
      type: 'clubPartitions',
      ids: [0, 1],
    },
  },
  {
    id: 3,
    type: 'clubs',
    name: 'Sporting',
    icon: sporting,
    progress: 68,
    isFullWidth: true,
    children: {
      type: 'clubPartitions',
      ids: [0, 1],
    },
  },
  {
    id: 4,
    type: 'clubs',
    name: 'Semoha',
    icon: semoha,
    progress: 68,
    isFullWidth: true,
    children: {
      type: 'clubPartitions',
      ids: [0, 1],
    },
  },
  {
    id: 5,
    type: 'clubs',
    name: 'Olympic',
    icon: olympic,
    progress: 68,
    isFullWidth: true,
    children: {
      type: 'clubPartitions',
      ids: [0, 1],
    },
  },
];

const clubsBelts = [
  {
    id: 0,
    type: 'clubsBelts',
    name: 'White',
    icon: whiteBelt,
    progress: 100,
    children: {},
  },
  {
    id: 1,
    type: 'clubsBelts',
    name: 'Yellow',
    icon: yellowBelt,
    progress: 100,
    children: {},
  },
  {
    id: 2,
    type: 'clubsBelts',
    name: 'Green',
    icon: greenBelt,
    progress: 100,
    children: {
      type: 'beltsPlayers',
      ids: [0, 1, 2],
    },
  },
  {
    id: 3,
    type: 'clubsBelts',
    name: 'Blue 1',
    icon: blueBelt,
    progress: 100,
    children: {},
  },
  {
    id: 4,
    type: 'clubsBelts',
    name: 'Blue 2',
    icon: blueBelt,
    progress: 100,
    children: {},
  },
  {
    id: 5,
    type: 'clubsBelts',
    name: 'Blue 3',
    icon: blueBelt,
    progress: 100,
    children: {},
  },
  {
    id: 6,
    type: 'clubsBelts',
    name: 'Brown 1',
    icon: brownBelt,
    progress: 100,
    children: {},
  },
  {
    id: 7,
    type: 'clubsBelts',
    name: 'Brown 2',
    icon: brownBelt,
    progress: 100,
    children: {},
  },
  {
    id: 8,
    type: 'clubsBelts',
    name: 'Red',
    icon: redBelt,
    progress: 100,
    children: {},
  },
  {
    id: 9,
    type: 'clubsBelts',
    name: 'Jr. Black',
    icon: blackBelt,
    progress: 100,
    children: {},
  },
  {
    id: 10,
    type: 'clubsBelts',
    name: 'Black',
    icon: blackBelt,
    progress: 100,
    children: {},
  },
];

const coaches = [
  {
    id: 0,
    name: 'Ahmed Samy',
    icon: coach,
    progress: 92,
    type: 'coaches',
    strengths: 40,
    weaknesses: 10,
    moderate: 15,
    searchId: 'C-1000',
    children: {
      type: 'kpis',
      ids: [10, 11, 12, 13],
    },
    meta: [
      {
        name: 'Gender',
        value: 'Male',
      },
      {
        name: 'Age',
        value: '28',
      },
      {
        name: 'Height',
        value: '182 cm',
      },
      {
        name: 'Weight',
        value: '78 Kg',
      },
    ],
    recommendations: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
    actions: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
  },
  {
    id: 1,
    name: 'Ragab Mohamed',
    icon: coach,
    progress: 40,
    type: 'coaches',
    strengths: 10,
    weaknesses: 40,
    moderate: 30,
    searchId: 'C-1001',
    children: {
      type: 'kpis',
      ids: [10, 11, 12, 13],
    },
    meta: [
      {
        name: 'Gender',
        value: 'Male',
      },
      {
        name: 'Age',
        value: '28',
      },
      {
        name: 'Height',
        value: '182 cm',
      },
      {
        name: 'Weight',
        value: '78 Kg',
      },
    ],
    recommendations: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
    actions: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
  },
  {
    id: 2,
    name: 'Taha Mohamed',
    icon: coach,
    progress: 85,
    type: 'coaches',
    strengths: 35,
    weaknesses: 12,
    moderate: 28,
    searchId: 'C-1002',
    children: {
      type: 'kpis',
      ids: [10, 11, 12, 13],
    },
    meta: [
      {
        name: 'Gender',
        value: 'Male',
      },
      {
        name: 'Age',
        value: '28',
      },
      {
        name: 'Height',
        value: '182 cm',
      },
      {
        name: 'Weight',
        value: '78 Kg',
      },
    ],
    recommendations: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
    actions: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
  },
];

const exams = [
  {
    id: 0,
    type: 'exams',
    name: 'Exam 1',
    icon: exam,
    progress: 100,
    children: {type: 'examsClubs', ids: [0, 1, 2, 3]},
  },
  {
    id: 1,
    type: 'exams',
    name: 'Exam 2',
    icon: exam,
    progress: 100,
    children: {},
  },
  {
    id: 2,
    type: 'exams',
    name: 'Exam 3',
    icon: exam,
    progress: 100,
    children: {},
  },
  {
    id: 3,
    type: 'exams',
    name: 'Exam 4',
    icon: exam,
    progress: 100,
    children: {},
  },
];

const examsClubs = [
  {
    id: 0,
    type: 'examsClubs',
    name: 'Shooting Club',
    isFullWidth: true,
    progress: 100,
    icon: elseed,
    children: {
      type: 'clubsBelts',
      ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  {
    id: 1,
    type: 'examsClubs',
    name: 'Sporting',
    isFullWidth: true,
    progress: 100,
    icon: sporting,
    children: {},
  },
  {
    id: 2,
    type: 'examsClubs',
    name: 'Semoha',
    isFullWidth: true,
    progress: 100,
    icon: semoha,
    children: {},
  },
  {
    id: 3,
    type: 'examsClubs',
    name: 'Olympic',
    isFullWidth: true,
    progress: 100,
    icon: olympic,
    children: {},
  },
];

const kpis = [
  {
    id: 0,
    name: 'Pushing',
    icon: {value: 'GiMightyForce', pack: 'gi'},
    progress: 80,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  },
  {
    id: 1,
    name: 'Fitness',
    icon: {value: 'GiHeartBeats', pack: 'gi'},
    progress: 75,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [],
    },
  },
  {
    id: 2,
    name: 'Attacking',
    icon: {value: 'GiPunchBlast', pack: 'gi'},
    progress: 91,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [],
    },
  },
  {
    id: 3,
    name: 'Counter',
    icon: {value: 'GiShieldBash', pack: 'gi'},
    progress: 45,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [],
    },
  },
  {
    id: 4,
    name: 'Discipline',
    icon: {value: 'GiTimeTrap', pack: 'gi'},
    progress: 91,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [],
    },
  },
  {
    id: 5,
    name: 'Mental',
    icon: {value: 'GiBrain', pack: 'gi'},
    progress: 80,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [],
    },
  },
  {
    id: 6,
    name: 'Psychology',
    icon: {value: 'GiInspiration', pack: 'gi'},
    progress: 35,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [],
    },
  },
  {
    id: 7,
    name: 'Weight Vs Height',
    icon: {value: 'GiWeightScale', pack: 'gi'},
    progress: 88,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [],
    },
  },
  {
    id: 8,
    name: 'Courage',
    icon: {value: 'GiLion', pack: 'gi'},
    progress: 96,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [],
    },
  },
  {
    id: 9,
    name: 'Kicks Power',
    icon: {value: 'GiLeg', pack: 'gi'},
    progress: 84,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [],
    },
  },
  {
    id: 10,
    name: 'Discipline',
    icon: {value: 'AiOutlineControl', pack: 'ai'},
    progress: 84,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [9],
    },
  },
  {
    id: 11,
    name: 'Attitude',
    icon: {value: 'VscChecklist', pack: 'vsc'},
    progress: 84,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [10],
    },
  },
  {
    id: 12,
    name: 'Cooperation',
    icon: {value: 'GiThreeFriends', pack: 'gi'},
    progress: 84,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [11],
    },
  },
  {
    id: 13,
    name: 'Loyalty',
    icon: {value: 'MdLoyalty', pack: 'md'},
    progress: 84,
    type: 'kpis',
    children: {
      type: 'metrics',
      ids: [12],
    },
  },
];

const metrics = [
  {
    id: 0,
    name: 'Technique',
    score: 4,
    icon: {value: 'GiAbstract053', pack: 'gi'},
  },
  {
    id: 1,
    name: 'Left Leg',
    score: 2,
    icon: {value: leftLeg, pack: 'img'},
  },
  {
    id: 2,
    name: 'Right Leg',
    score: 3,
    icon: {value: rightLeg, pack: 'img'},
  },
  {
    id: 9,
    name: 'Discipline',
    score: 3,
    icon: {value: 'AiOutlineControl', pack: 'ai'},
  },
  {
    id: 10,
    name: 'Attitude',
    score: 2,
    icon: {value: 'VscChecklist', pack: 'vsc'},
  },
  {
    id: 11,
    name: 'Cooperation',
    score: 4,
    icon: {value: 'GiThreeFriends', pack: 'gi'},
  },
  {
    id: 12,
    name: 'Loyalty',
    score: 4,
    icon: {value: 'MdLoyalty', pack: 'md'},
  },
];

const partitions = [
  {
    id: 0,
    type: 'partitions',
    name: 'National Teams',
    progress: 60,
    icon: maleTeam,
    children: {
      type: 'teams',
      ids: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 1,
    type: 'partitions',
    name: 'Coaches',
    progress: 50,
    icon: coach,
    children: {
      type: 'coaches',
      ids: [0, 1, 2],
    },
  },
  {
    id: 2,
    type: 'partitions',
    name: 'Referees',
    progress: 80,
    icon: refereesIcon,
    children: {
      type: 'referee-partitions',
      ids: [0, 1],
    },
  },
  {
    id: 3,
    type: 'partitions',
    name: 'Belts',
    progress: 100,
    icon: beltsIcon,
    children: {
      type: 'clubsBelts',
      ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  {
    id: 4,
    type: 'partitions',
    name: 'Clubs',
    progress: 84,
    icon: clubsIcon,
    children: {
      type: 'clubs',
      ids: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 5,
    type: 'partitions',
    name: 'Players',
    progress: 40,
    icon: playersIcon,
    children: {
      type: 'players',
      ids: [0, 1, 2, 3],
    },
  },
  {
    id: 6,
    type: 'partitions',
    name: 'Championships',
    progress: 100,
    icon: ChampionshipsIcon,
    children: {
      type: 'championships',
      ids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  },
  {
    id: 7,
    type: 'partitions',
    name: 'sponsorships',
    progress: 100,
    icon: sponsorship,
    children: {
      type: 'sponsorships',
      ids: [0, 1, 2],
    },
  },
  {
    id: 8,
    type: 'partitions',
    name: 'Teams',
    progress: 60,
    icon: maleTeam,
    children: {
      type: 'teams',
      ids: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 9,
    type: 'partitions',
    name: 'Employees',
    progress: 60,
    icon: employees,
    children: {},
  },
  {
    id: 10,
    type: 'Achievements',
    name: 'Teams',
    progress: 60,
    icon: achievements,
    children: {},
  },
];

const playerResults = [
  {
    id: 0,
    type: 'playerResults',
    name: 'Match 1 result + video',
    icon: result,
    progress: 100,
    children: {},
  },
  {
    id: 1,
    type: 'playerResults',
    name: 'Match 2 result + video',
    icon: result,
    progress: 100,
    children: {},
  },
  {
    id: 2,
    type: 'playerResults',
    name: 'Final Result',
    icon: result,
    progress: 100,
    children: {},
  },
];

const players = [
  {
    id: 0,
    name: 'Hedaya Malak',
    title: 'Bronze Medalist',
    progress: 84,
    icon: malak,
    isFullWidth: true,
    type: 'players',
    children: {
      type: 'kpis',
      ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    strengths: 35,
    weaknesses: 12,
    moderate: 28,
    searchId: 'P-1000',
    meta: [
      {
        name: 'Gender',
        value: 'Female',
      },
      {
        name: 'Age',
        value: '28',
      },
      {
        name: 'Height',
        value: '182 cm',
      },
      {
        name: 'Weight',
        value: '78 Kg',
      },
    ],
    recommendations: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
    actions: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
  },
  {
    id: 1,
    name: 'Seif Eissa',
    title: 'Bronze Medalist',
    progress: 93,
    icon: seif,
    isFullWidth: true,
    type: 'players',
    strengths: 40,
    weaknesses: 10,
    moderate: 15,
    searchId: 'P-1001',
    children: {
      type: 'kpis',
      ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    meta: [
      {
        name: 'Gender',
        value: 'Male',
      },
      {
        name: 'Age',
        value: '28',
      },
      {
        name: 'Height',
        value: '182 cm',
      },
      {
        name: 'Weight',
        value: '78 Kg',
      },
    ],
    recommendations: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
    actions: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
  },
  {
    id: 2,
    name: 'Heba Mohamed',
    title: 'Bronze Medalist',
    progress: 45,
    icon: heba,
    isFullWidth: true,
    type: 'players',
    strengths: 10,
    weaknesses: 40,
    moderate: 30,
    searchId: 'P-1002',
    children: {
      type: 'kpis',
      ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    meta: [
      {
        name: 'Gender',
        value: 'Female',
      },
      {
        name: 'Age',
        value: '28',
      },
      {
        name: 'Height',
        value: '182 cm',
      },
      {
        name: 'Weight',
        value: '78 Kg',
      },
    ],
    recommendations: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
    actions: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
  },
  {
    id: 3,
    name: 'Yasmine',
    title: 'Bronze Medalist',
    progress: 97,
    icon: yasmine,
    isFullWidth: true,
    type: 'players',
    strengths: 50,
    weaknesses: 5,
    moderate: 10,
    searchId: 'P-1003',
    children: {
      type: 'kpis',
      ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    meta: [
      {
        name: 'Gender',
        value: 'Female',
      },
      {
        name: 'Age',
        value: '28',
      },
      {
        name: 'Height',
        value: '182 cm',
      },
      {
        name: 'Weight',
        value: '78 Kg',
      },
    ],
    recommendations: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
    actions: [
      {
        id: 0,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 1,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 2,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 3,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
      {
        id: 4,
        name: 'Send the Billing Agreement',
        description:
          'checking UiKings AppThemeProvider and give customer support',
      },
    ],
  },
];

const playersStatuses = [
  {
    id: 0,
    type: 'playersStatuses',
    name: 'Pass',
    progress: 100,
    icon: pass,
    children: {},
  },
  {
    id: 1,
    type: 'playersStatuses',
    name: 'Failed',
    progress: 100,
    icon: failed,
    children: {},
  },
];

const refereePartitions = [
  {
    id: 0,
    type: 'referee-partitions',
    name: 'National',
    icon: refereesIcon,
    progress: 60,
    children: {
      type: 'referees',
      ids: [0, 1],
    },
  },
  {
    id: 1,
    type: 'referee-partitions',
    name: 'International',
    progress: 75,
    icon: refereesIcon,
    children: {
      type: 'referees',
      ids: [2, 3],
    },
  },
];

const referees = [
  {
    id: 0,
    type: 'referees',
    name: 'Ahmed Samy',
    icon: referee1,
    progress: 70,
    children: {},
    isFullWidth: true,
  },
  {
    id: 1,
    type: 'referees',
    name: 'Yehia Mohamed',
    icon: referee2,
    progress: 50,
    children: {},
    isFullWidth: true,
  },
  {
    id: 2,
    type: 'referees',
    name: 'Ramy Elsayyed',
    progress: 80,
    icon: referee3,
    children: {},
    isFullWidth: true,
  },
  {
    id: 3,
    type: 'referees',
    name: 'Omar Eladl',
    progress: 70,
    icon: referee4,
    children: {},
    isFullWidth: true,
  },
];

const sponsorships = [
  {
    id: 0,
    name: 'Sponsorship 1',
    icon: sponsorship,
    progress: 100,
    type: 'sponsorships',
    children: {},
  },
  {
    id: 1,
    name: 'Sponsorship 2',
    icon: sponsorship,
    progress: 100,
    type: 'sponsorships',
    children: {},
  },
  {
    id: 2,
    name: 'Sponsorship 3',
    icon: sponsorship,
    progress: 100,
    type: 'sponsorships',
    children: {},
  },
];

const sports = [
  {
    id: 0,
    name: 'Taekwondo',
    icon: taekwondo,
    progress: 65,
    type: 'sports',
    children: {
      type: 'partitions',
      ids: [1, 3, 6, 8, 9, 10],
    },
    strengths: 20,
    weaknesses: 15,
    moderate: 40,
  },
  {
    id: 1,
    name: 'Karate',
    icon: karate,
    progress: 40,
    type: 'sports',
    children: {
      type: 'teams',
      ids: [],
    },
    strengths: 10,
    weaknesses: 40,
    moderate: 30,
  },
  {
    id: 2,
    name: 'Weightlifting',
    icon: weightLifting,
    progress: 92,
    type: 'sports',
    children: {
      type: 'teams',
      ids: [],
    },
    strengths: 40,
    weaknesses: 10,
    moderate: 15,
  },
  {
    id: 3,
    name: 'Fencing',
    icon: fencing,
    progress: 85,
    type: 'sports',
    children: {
      type: 'teams',
      ids: [],
    },
    strengths: 35,
    weaknesses: 12,
    moderate: 28,
  },
  {
    id: 4,
    name: 'Equestrian',
    icon: equestrian,
    progress: 30,
    type: 'sports',
    children: {
      type: 'teams',
      ids: [],
    },
    strengths: 5,
    weaknesses: 50,
    moderate: 35,
  },
  {
    id: 5,
    name: 'Wrestling',
    icon: wrestling,
    progress: 70,
    type: 'sports',
    children: {
      type: 'teams',
      ids: [],
    },
    strengths: 15,
    weaknesses: 25,
    moderate: 45,
  },
  {
    id: 6,
    name: 'Hammer Throw',
    icon: hammerThrow,
    progress: 97,
    type: 'sports',
    children: {
      type: 'teams',
      ids: [],
    },
    strengths: 50,
    weaknesses: 5,
    moderate: 10,
  },
];

const teams = [
  {
    id: 0,
    name: 'Team 16 Boys',
    icon: maleTeam,
    progress: 65,
    type: 'teams',
    children: {
      type: 'players',
      ids: [1],
    },
    strengths: 20,
    weaknesses: 15,
    moderate: 40,
  },
  {
    id: 1,
    name: 'Team 16 Girls',
    icon: femaleTeam,
    progress: 40,
    type: 'teams',
    children: {
      type: 'players',
      ids: [0, 2, 3],
    },
    strengths: 10,
    weaknesses: 40,
    moderate: 30,
  },
  {
    id: 2,
    name: 'Team 14 Boys',
    icon: maleTeam,
    progress: 92,
    type: 'teams',
    children: {
      type: 'players',
      ids: [],
    },
    strengths: 40,
    weaknesses: 10,
    moderate: 15,
  },
  {
    id: 3,
    name: 'Team 14 Girls',
    icon: femaleTeam,
    progress: 65,
    type: 'teams',
    children: {
      type: 'players',
      ids: [],
    },
    strengths: 20,
    weaknesses: 15,
    moderate: 40,
  },
  {
    id: 4,
    name: 'Team 12 Boys',
    icon: maleTeam,
    progress: 40,
    type: 'teams',
    children: {
      type: 'players',
      ids: [],
    },
    strengths: 10,
    weaknesses: 40,
    moderate: 30,
  },
  {
    id: 5,
    name: 'Team 12 Girls',
    icon: femaleTeam,
    progress: 92,
    type: 'teams',
    children: {
      type: 'players',
      ids: [],
    },
    strengths: 40,
    weaknesses: 10,
    moderate: 15,
  },
];

const weightClubs = [
  {
    id: 0,
    type: 'weightClubs',
    name: 'Club 1',
    icon: club,
    progress: 100,
    children: {
      type: 'clubPlayers',
      ids: [0, 1],
    },
  },
  {
    id: 1,
    type: 'weightClubs',
    name: 'Club 2',
    icon: club,
    progress: 100,
    children: {},
  },
  {
    id: 2,
    type: 'weightClubs',
    name: 'Club 3',
    icon: club,
    progress: 100,
    children: {},
  },
];

const clubData = {
  belts,
  beltsPlayers,
  championships,
  champWeights,
  clubPartitions,
  clubPlayers,
  clubs,
  clubsBelts,
  coaches,
  exams,
  examsClubs,
  kpis,
  metrics,
  partitions,
  playerResults,
  players,
  playersStatuses,
  refereePartitions,
  referees,
  sponsorships,
  sports,
  teams,
  weightClubs,
};

export default clubData;
