'use strict';

const { layout } = require('../layout.js');
const model = require('../database/model.js');
const { response } = require('express');

function get(req, res) {
  const html = /*html*/ `
    <header>
        <h1>Paralog 🪵</h1>
    </header>
    <main>
        <section>
            <div>
                <a href="/signup" id='signup'>Sign-Up</a>
                <a href="/login" id='login'>Log-in</a>
            </div>
        </section>
    </main>
    `;
  res.send(layout('Hello!', html));
}

module.exports = { get };
