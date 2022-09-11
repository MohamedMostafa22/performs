import {atom} from 'recoil';
// import maleTeam from '../img/male-team.png';
// import femaleTeam from '../img/female-team.png';

const teams = atom({
  key: 'teams',
  default: [
    // {
    //   id: 0,
    //   name: 'Team 16 Boys',
    //   icon: maleTeam,
    //   progress: 65,
    //   type: 'teams',
    //   children: {
    //     type: 'players',
    //     ids: [1],
    //   },
    //   strengths: 20,
    //   weaknesses: 15,
    //   moderate: 40,
    // },
    // {
    //   id: 1,
    //   name: 'Team 16 Girls',
    //   icon: femaleTeam,
    //   progress: 40,
    //   type: 'teams',
    //   children: {
    //     type: 'players',
    //     ids: [0, 2, 3],
    //   },
    //   strengths: 10,
    //   weaknesses: 40,
    //   moderate: 30,
    // },
    // {
    //   id: 2,
    //   name: 'Team 14 Boys',
    //   icon: maleTeam,
    //   progress: 92,
    //   type: 'teams',
    //   children: {
    //     type: 'players',
    //     ids: [],
    //   },
    //   strengths: 40,
    //   weaknesses: 10,
    //   moderate: 15,
    // },
    // {
    //   id: 3,
    //   name: 'Team 14 Girls',
    //   icon: femaleTeam,
    //   progress: 65,
    //   type: 'teams',
    //   children: {
    //     type: 'players',
    //     ids: [],
    //   },
    //   strengths: 20,
    //   weaknesses: 15,
    //   moderate: 40,
    // },
    // {
    //   id: 4,
    //   name: 'Team 12 Boys',
    //   icon: maleTeam,
    //   progress: 40,
    //   type: 'teams',
    //   children: {
    //     type: 'players',
    //     ids: [],
    //   },
    //   strengths: 10,
    //   weaknesses: 40,
    //   moderate: 30,
    // },
    // {
    //   id: 5,
    //   name: 'Team 12 Girls',
    //   icon: femaleTeam,
    //   progress: 92,
    //   type: 'teams',
    //   children: {
    //     type: 'players',
    //     ids: [],
    //   },
    //   strengths: 40,
    //   weaknesses: 10,
    //   moderate: 15,
    // },
  ],
});

export default teams;
