import {atom} from 'recoil';
// import player from '../img/player.png';

const beltsPlayers = atom({
  key: 'beltsPlayers',
  default: [
    // {
    //   id: 0,
    //   type: 'beltsPlayers',
    //   name: 'Player 1',
    //   icon: player,
    //   progress: 100,
    //   children: {type: 'playersStatuses', ids: [0, 1, 2]},
    // },
    // {
    //   id: 1,
    //   type: 'beltsPlayers',
    //   name: 'Player 2',
    //   icon: player,
    //   progress: 100,
    //   children: {},
    // },
    // {
    //   id: 2,
    //   type: 'beltsPlayers',
    //   name: 'Player 3',
    //   icon: player,
    //   progress: 100,
    //   children: {},
    // },
  ],
});

export default beltsPlayers;
