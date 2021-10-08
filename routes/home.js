const { layout } = require('../layout');

function get(req, res) {
  const home = /*html*/ `
        <h1>This is the homepage!!</h1>
    `;

  const page = layout('Home', home);

  res.send(page);
}

module.exports = { get };
