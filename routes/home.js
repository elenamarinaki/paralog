'use strict';

const { layout } = require('../layout.js');
const model = require('../database/model.js');

function get(req, res) {
  model.getParapost().then((data) => {
    const parapost = data.map((post) => {
      return /*html*/ `
      <div>
        <h3>${post.username}</h3>
        <p>${post.parapost}</p>
      </div>
    `;
    });

    const home = /*html*/ `
    <h1>This is the homepage!!</h1>
    <form action='/' method='POST'>
      <label for='username'>Name</label>
      <input type="text" id='username' name='username' />
      <label for='parapost'>Thoughts</label>
      <input type="text" id='parapost' name='parapost' />
      <button type='submit'>Submit</button>
    </form>

    ${parapost}
  `;

    res.send(layout('Home', home));
  });
}

function post(req, res) {
  model.storeParapost(req.body).then(() => {
    res.redirect('/');
  });
}

module.exports = { get, post };
