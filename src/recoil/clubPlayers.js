import {atom} from 'recoil';
// import player from '../img/player.png';

const clubPlayers = atom({
  key: 'clubPlayers',
  default: [
    // {
    //   id: 0,
    //   type: 'clubPlayers',
    //   name: 'Player 1',
    //   icon: player,
    //   progress: 100,
    //   children: {type: 'playerResults', ids: [0, 1, 2]},
    // },
    // {
    //   id: 1,
    //   type: 'clubPlayers',
    //   name: 'Player 2',
    //   icon: player,
    //   progress: 100,
    //   children: {},
    // },
  ],
});

export default clubPlayers;
