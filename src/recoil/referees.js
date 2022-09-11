import {atom} from 'recoil';
// import referee1 from '../img/referee1.webp';
// import referee2 from '../img/referee2.jpg';
// import referee3 from '../img/referee3.jpg';
// import referee4 from '../img/referee4.jpg';

const referees = atom({
  key: 'referees',
  default: [
    // {
    //   id: 0,
    //   type: 'referees',
    //   name: 'Ahmed Samy',
    //   icon: referee1,
    //   progress: 70,
    //   children: {},
    //   isFullWidth: true,
    // },
    // {
    //   id: 1,
    //   type: 'referees',
    //   name: 'Yehia Mohamed',
    //   icon: referee2,
    //   progress: 50,
    //   children: {},
    //   isFullWidth: true,
    // },
    // {
    //   id: 2,
    //   type: 'referees',
    //   name: 'Ramy Elsayyed',
    //   progress: 80,
    //   icon: referee3,
    //   children: {},
    //   isFullWidth: true,
    // },
    // {
    //   id: 3,
    //   type: 'referees',
    //   name: 'Omar Eladl',
    //   progress: 70,
    //   icon: referee4,
    //   children: {},
    //   isFullWidth: true,
    // },
  ],
});

export default referees;
