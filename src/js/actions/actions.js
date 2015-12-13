/**
 * Action types
 */

export const TROW_DART = 'TROW_DART';
export const UNDO = 'UNDO';
export const START_NEW_GAME = 'START_NEW_GAME';

export function throwDart(points) {
  return {
    type: TROW_DART,
    points,
  };
}

export function undo() {
  return {
    type: UNDO,
  };
}

export function startNewGame() {
  return {
    type: START_NEW_GAME,
  };
}
