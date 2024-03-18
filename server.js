const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send(`NOW GO TO ANY UPTIME APP and paste this link`)
})

function keepAlive() {
  server.listen(5555, () => { console.log("Server is Ready!!" + Date.now()) });
}

module.exports = keepAlive;

