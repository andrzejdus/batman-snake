import Board from './Board/Board'
import getNextStrategy from './Strategy/Strategy';

const snek = [
  'hiss',
  'i bite you',
  'i am darkness',
  'heck off',
  'you talking shit?',
  'fight me m8',
  'i am scary cober',
  'dont heck with me',
  'am much venom',
]

export default class BatmanSnake {
  constructor(game) {
    this.game = game;

    this.strategy = undefined;
    this.lastApple = undefined;
  }

  getMove(state) {
    const board = new Board(this.game, state);

    const applePosition = board.applePosition;
    if (this.lastApple !== applePosition || Math.random() < 0.1) { // small chance of changing strategy
      this.strategy = getNextStrategy(board);

      this.lastApple = applePosition;
    }

    console.log(snek[Math.floor(Math.random() * snek.length)]);

    return this.strategy.move(board);
  }
}
