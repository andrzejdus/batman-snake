import moveTo from '../Move/Move';

export default class FetchStrategy {

  /**
   * @param {Board} board
   */
  move(board) {
    return moveTo(board.snake, board.applePosition);
  }
}
