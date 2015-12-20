import { TROW_DART, UNDO, START_NEW_GAME } from '../actions/actions';
import { PLAYER_1, PLAYER_2, MAX_SCORE } from '../constants/constants.js';

const initialState = {
  player: PLAYER_1,
  result: {
    [PLAYER_1]: {
      score: MAX_SCORE,
      points: [],
    },
    [PLAYER_2]: {
      score: MAX_SCORE,
      points: [],
    },
  },
};

const HISTORY_LENGTH = 3;
const history = [];

function pushToHistory(newState) {
  if (history.length === HISTORY_LENGTH) {
    history.shift();
  }
  history.push(newState);
}

function darts(state = initialState, action) {
  switch (action.type) {
  case TROW_DART:
    let {player} = state;
    let {score, points} = state.result[player];
    if (score === 0) {
      return state;
    }
    score -= action.points;
    pushToHistory(state);
    if (score < 0) {
      player = player === PLAYER_1 ? PLAYER_2 : PLAYER_1;
      return {...state, player};
    }
    points = points.concat([action.points]);
    const result = {
      [PLAYER_1]: state.result[PLAYER_1],
      [PLAYER_2]: state.result[PLAYER_2],
      ...{[player]: {score, points}},
    };
    if (points.length % 3 === 0) {
      player = player === PLAYER_1 ? PLAYER_2 : PLAYER_1;
    }
    return {player, ...{result}};
  case UNDO:
    return history.length ? history.pop() : state;
  case START_NEW_GAME:
    history.length = 0;
    return initialState;
  default:
    return state;
  }
}

export default darts;
