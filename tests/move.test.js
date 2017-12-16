import moveTo from '../src/Move/Move';
import createTile from '../src/Board/Tile';
import Snake from '../src/Board/Snake';

test("does nothing if at destination", function () {

  const snake = new Snake(createTile(10, 10), "W")
  const destination = createTile(10, 10);

  expect(moveTo(snake, destination)).toBe(undefined);

});


test("does turn right", function () {

  const snake = new Snake(createTile(10, 10), "E")
  const destination = createTile(10, 20);

  expect(moveTo(snake, destination)).toBe('R');

});

test("does turn left", function () {

  const snake = new Snake(createTile(10, 10), "E")
  const destination = createTile(10, 0);

  expect(moveTo(snake, destination)).toBe('L');

});

test("continues on its path", function () {

  const snake = new Snake(createTile(10, 10), "E")
  const destination = createTile(20, 10);

  expect(moveTo(snake, destination)).toBe(undefined);

});


test("goes for apple", function () {

  const snake = new Snake(createTile(0, 0), "E")
  const destination = createTile(0, 15);

  expect(moveTo(snake, destination)).toBe("R");

});


