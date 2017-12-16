import Board from '../src/Board/Board';
import createTile from '../src/Board/Tile';
import moveTo from '../src/Move/Move';

test("finds players", function () {

  const players = (new Board({}, [[
    { "player": "alpha", "head": true },
    undefined,
    { "player": "bravo", "head": true },
  ], [], [
    undefined,
    { "player": "charlie", "head": true },
  ]])).getPlayerPositions();

  expect(players.length).toBe(3);

  expect(players[0].tile).toBe(createTile(0,0));
  expect(players[1].tile).toBe(createTile(2,0));
  expect(players[2].tile).toBe(createTile(1,2));

});


test("is closest to apple", function () {
  const board = new Board({"you": "p1"}, [
    (new Array(3)).fill("").map((_, idx) => ({
      "player": `p${idx}`,
      "head": "E",
    })),
    [undefined, undefined, undefined],
    [undefined, "🍎", undefined],
  ]);

  expect(board.hasShortestPathToApple).toBe(true);

  expect(moveTo(board.snake, board.applePosition)).toBe("R");
})
