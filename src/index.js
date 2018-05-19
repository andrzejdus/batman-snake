import BatmanSnake from './BatmanSnake';
import io from 'socket.io-client';

const name = process.argv[2] || 'Batman';
const endpoint = process.argv[3] || 'http://localhost:3001';

const snake = new BatmanSnake();
const client = io(endpoint);

client.on('connect', () => {
  console.log("Sending hello");
  client.emit('hello', name);
});

client.on('init', init => {
  console.log("We were accepted by the game");
  snake.init(init);
  client.on('move', board => client.emit('move', snake.getMove(board)))
});

client.on('fail', () => console.log("The game rejected us"));
