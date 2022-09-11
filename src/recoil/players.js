import {atom} from 'recoil';
// import malak from '../img/malak.png';
// import seif from '../img/seif.png';
// import heba from '../img/Heba.png';
// import yasmine from '../img/Yasmine.png';

const players = atom({
  key: 'players',
  default: [
    // {
    //   id: 0,
    //   name: 'Hedaya Malak',
    //   title: 'Bronze Medalist',
    //   progress: 84,
    //   icon: malak,
    //   isFullWidth: true,
    //   type: 'players',
    //   children: {
    //     type: 'kpis',
    //     ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   },
    //   strengths: 35,
    //   weaknesses: 12,
    //   moderate: 28,
    //   searchId: 'P-1000',
    //   meta: [
    //     {
    //       name: 'Gender',
    //       value: 'Female',
    //     },
    //     {
    //       name: 'Age',
    //       value: '28',
    //     },
    //     {
    //       name: 'Height',
    //       value: '182 cm',
    //     },
    //     {
    //       name: 'Weight',
    //       value: '78 Kg',
    //     },
    //   ],
    //   recommendations: [
    //     {
    //       id: 0,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 1,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 2,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 3,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 4,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //   ],
    //   actions: [
    //     {
    //       id: 0,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 1,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 2,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 3,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 4,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //   ],
    // },
    // {
    //   id: 1,
    //   name: 'Seif Eissa',
    //   title: 'Bronze Medalist',
    //   progress: 93,
    //   icon: seif,
    //   isFullWidth: true,
    //   type: 'players',
    //   strengths: 40,
    //   weaknesses: 10,
    //   moderate: 15,
    //   searchId: 'P-1001',
    //   children: {
    //     type: 'kpis',
    //     ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   },
    //   meta: [
    //     {
    //       name: 'Gender',
    //       value: 'Male',
    //     },
    //     {
    //       name: 'Age',
    //       value: '28',
    //     },
    //     {
    //       name: 'Height',
    //       value: '182 cm',
    //     },
    //     {
    //       name: 'Weight',
    //       value: '78 Kg',
    //     },
    //   ],
    //   recommendations: [
    //     {
    //       id: 0,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 1,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 2,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 3,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 4,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //   ],
    //   actions: [
    //     {
    //       id: 0,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 1,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 2,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 3,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 4,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   name: 'Heba Mohamed',
    //   title: 'Bronze Medalist',
    //   progress: 45,
    //   icon: heba,
    //   isFullWidth: true,
    //   type: 'players',
    //   strengths: 10,
    //   weaknesses: 40,
    //   moderate: 30,
    //   searchId: 'P-1002',
    //   children: {
    //     type: 'kpis',
    //     ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   },
    //   meta: [
    //     {
    //       name: 'Gender',
    //       value: 'Female',
    //     },
    //     {
    //       name: 'Age',
    //       value: '28',
    //     },
    //     {
    //       name: 'Height',
    //       value: '182 cm',
    //     },
    //     {
    //       name: 'Weight',
    //       value: '78 Kg',
    //     },
    //   ],
    //   recommendations: [
    //     {
    //       id: 0,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 1,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 2,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 3,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 4,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //   ],
    //   actions: [
    //     {
    //       id: 0,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 1,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 2,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 3,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 4,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   name: 'Yasmine',
    //   title: 'Bronze Medalist',
    //   progress: 97,
    //   icon: yasmine,
    //   isFullWidth: true,
    //   type: 'players',
    //   strengths: 50,
    //   weaknesses: 5,
    //   moderate: 10,
    //   searchId: 'P-1003',
    //   children: {
    //     type: 'kpis',
    //     ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   },
    //   meta: [
    //     {
    //       name: 'Gender',
    //       value: 'Female',
    //     },
    //     {
    //       name: 'Age',
    //       value: '28',
    //     },
    //     {
    //       name: 'Height',
    //       value: '182 cm',
    //     },
    //     {
    //       name: 'Weight',
    //       value: '78 Kg',
    //     },
    //   ],
    //   recommendations: [
    //     {
    //       id: 0,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 1,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 2,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 3,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 4,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //   ],
    //   actions: [
    //     {
    //       id: 0,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 1,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 2,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 3,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //     {
    //       id: 4,
    //       name: 'Send the Billing Agreement',
    //       description:
    //         'checking UiKings AppThemeProvider and give customer support',
    //     },
    //   ],
    // },
  ],
});

export default players;
