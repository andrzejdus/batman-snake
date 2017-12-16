const express = require('express')
const process = require('process')
const Snake = require('../lib').default
const http = require('http');
const app = express()
const selfPort = 3000 + Math.round(Math.random()*100);

const [, , server, name] = process.argv;

let player;

app.post('/init', function (req, res) {
  let body = "";

  req.on("data", function (chunk) {
    body += chunk;
  })

  req.on('end', function () {
    const init = JSON.parse(body);
    console.log(`Initiated ${init.board.width}x${init.board.height} game with ${init.players.length} players. I am ${init.you}`);

    player = new Snake(init);

    res.end();
  })
});

app.post('/move', function (req, res) {
  let body = "";

  req.on("data", function (chunk) {
    body += chunk;
  })

  req.on('end', function () {
    const state = JSON.parse(body);

    const move = player.getMove(state);
    console.log(`${name} moving: ${move}`);
    res.write(JSON.stringify(move));

    res.end();
  });
})

app.listen(selfPort, () => console.log(`Snake ${name} ready on port ${selfPort}`));

// ping server
const req = http.request({
  host: server.split(":")[0],
  path: '/',
  port: server.split(":")[1] || 3000,
  method: 'POST',
  headers: { "user-agent": name },
});

req.write(""+selfPort);
req.end();
