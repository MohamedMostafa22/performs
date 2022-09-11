import {atom} from 'recoil';
// import pass from '../img/pass.png';
// import failed from '../img/failed.png';

const playersStatuses = atom({
  key: 'playersStatuses',
  default: [
    // {
    //   id: 0,
    //   type: 'playersStatuses',
    //   name: 'Pass',
    //   progress: 100,
    //   icon: pass,
    //   children: {
    //     type: 'clubsBelts',
    //     ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //   },
    // },
    // {
    //   id: 1,
    //   type: 'playersStatuses',
    //   name: 'Failed',
    //   progress: 100,
    //   icon: failed,
    //   children: {},
    // },
  ],
});

export default playersStatuses;
