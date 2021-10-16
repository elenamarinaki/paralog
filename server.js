'use strict';

const express = require('express');
const functions = require('./routes/functions');
const items = require('./Items');
const { layout } = require('./layout');
const home = require('./routes/home');

const db = require('./database/connection.js');

const server = express();

const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

server.use(express.urlencoded({ extended: false }));

server.use(cookieParser(process.env.COOKIE_SECRET));

// Static file location
server.use(express.static('./public'));

const entry = {
  itSeems: 'newItSeems',
  itIs: 'newItIs',
  time: new Date(),
};

// ⚠  can use only one server.use()
// server.use(() => console.log('hello'));

server.get('/home', home.get);
server.post('/home', home.post);

// ----------------------------------------------------

server.get('/example', (req, res) => {
  console.log(`inside get / + ${req.method}!`);

  const html = /*html*/ `
  <h1>Server up & running!!</h1>
  <div>
    <p>${entry.itSeems}</p>
    <p>${entry.itIs}</p>
    <p>${entry.time}</p>

  </div>
  `;
  const page = layout('First test', html);

  res.send(page);
});

// test API
server.get('/api/items', (req, res) => {
  res.json(items);
});

// testing middleware 🧪
server.get('/log', functions.logger, (request, response) => {
  response.send('<h1>Hello</h1>');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
