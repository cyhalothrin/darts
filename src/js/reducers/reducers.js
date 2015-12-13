import { TROW_DART } from '../actions/actions';
import { PLAYER_1, PLAYER_2 } from '../constants/players.js';

const initialState = {
  player: PLAYER_1,
  points: [],
};

function darts(state = initialState, action) {
  switch (action.type) {
  case TROW_DART:
    const points = state.points.concat([action.points]);
    let player = state.player;
    if (points.length % 3 === 0) {
      player = player === PLAYER_1 ? PLAYER_2 : PLAYER_1;
    }
    return { player, points };
  default:
    return state;
  }
}

export default darts;
