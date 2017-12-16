import FetchStrategy from './FetchStrategy';
import RunInCircles from './RunInCirclesStrategy';

/**
 * @param {Board} board
 */
export default function getNextStrategy(board) {
  if (board.hasShortestPathToApple) {
    return new FetchStrategy(board);
  }

  return new RunInCircles(board);
}
