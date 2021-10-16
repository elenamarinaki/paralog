'use strict';

const db = require('./connection.js');

function getParaposts() {
  const queryStr = /*sql*/ `
    SELECT id, parapost, user_id FROM paraposts
    `;
  return db.query(queryStr).then((result) => {
    console.log(result.rows);
    return result.rows;
  });
}

async function createParapost(id, parapost) {
  const queryStr = /*sql*/ `
    INSERT INTO
    paraposts (user_id, parapost, created_at)
    VALUES ($1, $2, (SELECT CURRENT_TIMESTAMP))
  `;
  await db.query(queryStr, [id, parapost]);
}

function createSession(sid, data) {
  const queryStr = /*sql*/ `
  INSERT INTO sessions (sid, data) VALUES ($1, $2)
  RETURNING sid
  `;
  return db.query(queryStr, [sid, data]).then((result) => result.rows[0].sid);
}

module.exports = { getParaposts, createParapost, createSession };
