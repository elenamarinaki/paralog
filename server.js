const express = require('express');
const functions = require('./routes/functions');

const server = express();

// Static file location
server.use(express.static('./public'));

const entry = {
  itSeems: 'newItSeems',
  itIs: 'newItIs',
  time: new Date(),
};

// ⚠  can use only one server.use()
// server.use(() => console.log('hello'));

server.get('/', (req, res) => {
  console.log(`inside get / + ${req.method}!`);

  const html = /*html*/ `
  <h1>Server up & running!!</h1>
  <div>
    <p>${entry.itSeems}</p>
    <p>${entry.itIs}</p>
    <p>${entry.time}</p>

  </div>
  `;

  res.send(html);
});

// testing middleware 🧪
server.get('/log', functions.logger, (request, response) => {
  response.send('<h1>Hello</h1>');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
