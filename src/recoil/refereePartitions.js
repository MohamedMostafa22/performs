import {atom} from 'recoil';
// import refereesIcon from '../img/referees.png';

const refereePartitions = atom({
  key: 'refereePartitions',
  default: [
    // {
    //   id: 0,
    //   type: 'referee-partitions',
    //   name: 'National',
    //   icon: refereesIcon,
    //   progress: 60,
    //   children: {
    //     type: 'referees',
    //     ids: [0, 1],
    //   },
    // },
    // {
    //   id: 1,
    //   type: 'referee-partitions',
    //   name: 'International',
    //   progress: 75,
    //   icon: refereesIcon,
    //   children: {
    //     type: 'referees',
    //     ids: [2, 3],
    //   },
    // },
  ],
});

export default refereePartitions;
