import { TROW_DART, UNDO, START_NEW_GAME } from '../actions/actions';
import { PLAYER_1, PLAYER_2 } from '../constants/players.js';

const initialState = {
  player: PLAYER_1,
  points: [],
};

function getPlayer(length, player) {
  if (length % 3 === 0) {
    return player === PLAYER_1 ? PLAYER_2 : PLAYER_1;
  }
  return player;
}

function darts(state = initialState, action) {
  let points = state.points;
  switch (action.type) {
  case TROW_DART:
    points = points.concat([action.points]);
    return {
      points,
      player: getPlayer(points.length, state.player),
    };
  case UNDO:
    points = state.points.slice(0, -1);
    return {
      points,
      player: getPlayer(points.length, state.player),
    };
  case START_NEW_GAME:
    return initialState;
  default:
    return state;
  }
}

export default darts;
