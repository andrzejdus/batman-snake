import moveTo from '../Move/Move';

export default class FetchStrategy {

  /**
   * @param {Board} board
   */
  constructor(board) {
    this.board = board;
  }

  move() {
    return moveTo(this.board.snake, this.board.applePosition);
  }
}
