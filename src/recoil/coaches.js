import {atom} from 'recoil';
// import coach from '../img/coach.png';

const coaches = atom({
  key: 'coaches',
  default: [
    // {
    //   id: 0,
    //   name: 'Ahmed Samy',
    //   icon: coach,
    //   progress: 92,
    //   type: 'coaches',
    //   strengths: 40,
    //   weaknesses: 10,
    //   moderate: 15,
    //   searchId: 'C-1000',
    //   children: {
    //     type: 'kpis',
    //     ids: [10, 11, 12, 13],
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
    //   id: 1,
    //   name: 'Ragab Mohamed',
    //   icon: coach,
    //   progress: 40,
    //   type: 'coaches',
    //   strengths: 10,
    //   weaknesses: 40,
    //   moderate: 30,
    //   searchId: 'C-1001',
    //   children: {
    //     type: 'kpis',
    //     ids: [10, 11, 12, 13],
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
    //   name: 'Taha Mohamed',
    //   icon: coach,
    //   progress: 85,
    //   type: 'coaches',
    //   strengths: 35,
    //   weaknesses: 12,
    //   moderate: 28,
    //   searchId: 'C-1002',
    //   children: {
    //     type: 'kpis',
    //     ids: [10, 11, 12, 13],
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
  ],
});

export default coaches;
