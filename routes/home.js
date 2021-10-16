'use strict';

const { layout } = require('../layout.js');
const model = require('../database/model.js');

function get(req, res) {
  model.getParaposts().then((data) => {
    const parapost = data.map((post) => {
      return /*html*/ `
      <div>
        <p>${post.parapost}</p>
      </div>
    `;
    });

    const home = /*html*/ `
    <h1>This is the homepage!!</h1>
    <form action='/' method='POST'>
      <label for='parapost'>Thoughts</label>
      <input type="text" id='parapost' name='parapost' />
      <button type='submit'>Submit</button>
    </form>

    ${parapost.join('')}
  `;

    res.send(layout('Home', home));
  });
}

function post(req, res) {
  const { id, parapost } = req.body;
  model
    .createParapost(id, parapost)
    .then(() => {
      res.redirect('/home');
    })
    .catch(console.log);
}

module.exports = { get, post };
