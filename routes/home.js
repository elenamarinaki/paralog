'use strict';

const { layout } = require('../layout.js');
const { getParapost } = require('../database/model.js');

function get(req, res) {
  getParapost().then((data) => {
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
      <label for='text-post'>Add your thoughts</label>
      <input type="text" id='text-post' name='text-post' />
      <button type='submit'>Submit</button>
    </form>

    ${parapost}
  `;

    res.send(layout('Home', home));
  });
}

function post(req, res) {
  console.log(req.body);
  res.redirect('/');
}

module.exports = { get, post };
