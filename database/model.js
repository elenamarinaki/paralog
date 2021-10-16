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
  const queryParapost = /*sql*/ `
    INSERT INTO
    paraposts (user_id, parapost, created_at)
    VALUES ($1, $2, (SELECT CURRENT_TIMESTAMP))
  `;
  await db.query(queryParapost, [id, parapost]);
}

module.exports = { getParaposts, createParapost };
