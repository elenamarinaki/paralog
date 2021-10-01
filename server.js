const { res } = require('express');
const express = require('express');

const server = express();

server.use(() => console.log('hello'));

server.get('/', (req, res) => {
  const html = /*html*/`<h1>Server up & running!!</h1>`;
  res.send(html);
});

const PORT = process.env.PORT || 5555;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
