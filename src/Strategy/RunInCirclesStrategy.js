export default class RunInCirclesStrategy {

  /**
   * @param {Board} board
   * @param direction
   */
  constructor(board, direction) {
    this.radius = Math.ceil(board.snake.length / 4) + 1;
    this.direction = direction || ["L", "R"][Math.floor(Math.random() * 2)];
    this.iteration = 0;
  }

  move() {
    this.iteration++;

    // n times forward
    if (0 === (this.iteration % this.radius)) {
      return this.direction;
    }

    // turn
    return undefined;
  }

}
