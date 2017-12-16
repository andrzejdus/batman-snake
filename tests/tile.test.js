import createTile from '../src/Board/Tile';

test("same tile has zero distance", function () {
  const alpha = createTile(10, 10);
  const bravo = createTile(10, 10);

  expect(alpha.distanceTo(bravo)).toBe(0);
  expect(alpha).toBe(bravo);
});

test("x distance", function () {
  const alpha = createTile(0, 0);
  const bravo = createTile(10, 0);

  expect(alpha.distanceTo(bravo)).toBe(10);
});

test("y distance", function () {
  const alpha = createTile(0, 0);
  const bravo = createTile(0, 10);

  expect(alpha.distanceTo(bravo)).toBe(10);
});

test("xy distance", function () {
  const alpha = createTile(0, 0);
  const bravo = createTile(10, 10);

  expect(alpha.distanceTo(bravo)).toBe(20);
});

