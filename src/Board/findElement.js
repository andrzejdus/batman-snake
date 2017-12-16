import createTile from './Tile';
import Snake from './Snake';

export function findPosition(board, match) {
  const [result] = filterPositions(board, match);

  return result && result.tile;
}

export function findSnake(board, player) {
  const snakeParts = filterPositions(board, element => element && element.player === player);
  const [head] = snakeParts.filter(element => element.element.head);

  return new Snake(head.tile, head.element.head /* direction */, snakeParts.length);
}

export function filterPositions(board, match) {
  const result = [];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (match(board[y][x])) {
        result.push({ tile: createTile(x,y), element: board[y][x] });
      }
    }
  }

  return result;
}
