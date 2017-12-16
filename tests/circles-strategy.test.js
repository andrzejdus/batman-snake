import CirclesStrategy from '../src/Strategy/RunInCirclesStrategy';
import Board from '../src/Board/Board';

test("runs in circles", function () {

  const playerName = "snek"
  const board = new Board({you: playerName}, [[
    {player: playerName, head: "W"},
    {player: playerName},
    {player: playerName},
    {player: playerName},
    {player: playerName},
  ]]);

  const strategy = new CirclesStrategy(board, "L");

  const moves = (new Array(9)).fill("").map(u => strategy.move());

  expect(moves).toEqual([
    undefined, undefined, "L",
    undefined, undefined, "L",
    undefined, undefined, "L",
  ])
});
