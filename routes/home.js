const { layout } = require('../layout');

function get(req, res) {
  const home = /*html*/ `
    <h1>This is the homepage!!</h1>
    <form action='/' method='POST'>
    <label for='text-post'>Add your thoughts</label>
    <input type="text" id='text-post' name='text-post' />
    <button type='submit'>Submit</button>
    </form>
    `;

  const page = layout('Home', home);

  res.send(page);
}

function post(req, res) {
  console.log(req.body);
  res.redirect('/');
}

module.exports = { get, post };
