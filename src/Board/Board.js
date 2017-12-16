import { findPosition, findSnake, filterPositions } from './findElement';

const APPLE = "🍎";

export default class Board {
  constructor(game, board) {
    this.game = game;
    this.board = board;
  }

  /**
   * @returns {Snake}
   */
  get snake() {
    return findSnake(this.board, this.game.you);
  }

  /**
   * @returns {Tile}
   */
  get applePosition() {
    return findPosition(this.board, element => APPLE === element);
  }

  /**
   * @returns {Tile[]}
   */
  get playerPositions() {
    return filterPositions(this.board, element => element && element.head);
  }

  get hasShortestPathToApple() {
    const apple = this.applePosition;

    const playersToApple = this.playerPositions.map(element => ({
      player: element.element.player,
      distance: apple.distanceTo(element.tile),
    })).concat().sort((alpha, bravo) => alpha.distance - bravo.distance);

    const [nearestPlayer] = playersToApple;
    const equalNearest = playersToApple.filter(element => element.distance === nearestPlayer.distance).length;

    return equalNearest === 1 && nearestPlayer.player === this.game.you;
  }

}
