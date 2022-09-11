import {atom} from 'recoil';
// import coach from '../img/coach.png';
// import maleTeam from '../img/male-team.png';

const clubPartitions = atom({
  key: 'clubPartitions',
  default: [
    // {
    //   id: 0,
    //   type: 'clubPartitions',
    //   name: 'Teams',
    //   progress: 60,
    //   icon: maleTeam,
    //   children: {
    //     type: 'teams',
    //     ids: [0, 1, 2, 3, 4, 5],
    //   },
    // },
    // {
    //   id: 1,
    //   type: 'clubPartitions',
    //   name: 'Coaches',
    //   progress: 50,
    //   icon: coach,
    //   children: {
    //     type: 'coaches',
    //     ids: [0, 1, 2],
    //   },
    // },
  ],
});

export default clubPartitions;
