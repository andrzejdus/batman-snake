import FetchStrategy from './FetchStrategy';
import RunInCirclesStrategy from './RunInCirclesStrategy';

/**
 * @param {Board} board
 * @return {FetchStrategy|RunInCirclesStrategy}
 */
export default function getNextStrategy(board) {
  if (board.hasShortestPathToApple) {
    return new FetchStrategy();
  }

  return new RunInCirclesStrategy(board);
}
