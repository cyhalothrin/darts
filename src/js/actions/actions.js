/**
 * Action types
 */

export const TROW_DART = 'TROW_DART';

export function throwDart(points) {
  return {
    type: TROW_DART,
    points,
  };
}
