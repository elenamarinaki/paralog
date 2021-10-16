'use strict';

const { layout } = require('../layout.js');
const model = require('../database/model.js');
const { response } = require('express');

function get(req, res) {
  const html = /*html*/ `
    <header>
        <h1>Paralog 🪵</h1>
    </header>
    <section>
        <div>
            <a href="/signup" id='signup'>Sign-Up</a>
            <a href="/login" id='login'>Log-in</a>
        </div>
    </section>
    `;
  res.send(layout('Hello!', html));
}

module.exports = { get };
