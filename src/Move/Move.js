/**
 *
 * @param {Snake} Snake
 * @param {Tile} Destination
 */
export default function moveTo(Snake, Destination) {
  if (Snake.head === Destination) {
    return;
  }

  const [direction] = [
    {
      direction: 'W',
      value: Math.max(0, Snake.head.x - Destination.x)
    },
    {
      direction: 'E',
      value: Math.max(0, Destination.x - Snake.head.x)
    },
    {
      direction: 'N',
      value: Math.max(0, Snake.head.y - Destination.y)
    },
    {
      direction: 'S',
      value: Math.max(0, Destination.y - Snake.head.y)
    },
  ].filter(pos => pos.value).sort((alpha, bravo) => bravo.value - alpha.value).map(x => x.direction);

  switch (`${Snake.direction}, ${direction}`) {
    case 'N, E': return "R";
    case 'E, S': return "R";
    case 'S, W': return "R";
    case 'W, N': return "R";
    case 'N, W': return "L";
    case 'W, S': return "L";
    case 'S, E': return "L";
    case 'E, N': return "L";

    case 'N, S': return ["L", "R"][Math.floor(Math.random() * 2)];
    case 'E, W': return ["L", "R"][Math.floor(Math.random() * 2)];
    case 'S, N': return ["L", "R"][Math.floor(Math.random() * 2)];
    case 'W, E': return ["L", "R"][Math.floor(Math.random() * 2)];
  }
}
