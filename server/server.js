const express = require('express')
const http = require('http')
const app = express()

let players = {};
let started = false;

function startGame() {
  players = Object.keys(players).map(key => players[key]);

  players.forEach(function (player) {
    const init = {
      "type": ["snake"][0],
      "start": {
        "x": 0,
        "y": 0,
        "length": 3,
        "direction": ["N", "E", "S", "W"][0],
      },
      "timeout": 200,
      "board": {
        "width": 100,
        "height": 100,
      },
      "bałwanek": "☃️",
      "players": players.map(player => player.name),
      "you": player.name,
    }


    const req = http.request({
      host: player.ip,
      path: '/init',
      port: player.port,
      method: 'POST',
    });

    req.write(JSON.stringify(init));
    req.end();

  });

  const board = [
    players.map(player => ({
      "player": player.name,
      "head": "S",
    })),
    [undefined, undefined, undefined],
    [undefined, "🍎", undefined],
  ];

  setInterval(function () {
    const player = players.shift();
    console.log(`Player ${player.name} turn`);

    players.push(player);

    const req = http.request({
      host: player.ip,
      path: '/move',
      port: player.port,
      method: 'POST',
    });

    req.write(JSON.stringify(board));
    req.end();
  }, 1000);
}

app.post('/', function (req, res) {

  let body = ""

  req.on('data',function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    if (!started) {
      const id = `${req.ip}:${body}`;

      players[id] = {
        name: req.header('user-agent') || req.ip,
        port: body,
        ip: req.ip,
      }

      started = Object.keys(players).length >= 3;

      console.log("new player", players[id]);

      if (started) {
        startGame();
      }
    }

    res.end();
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
