'use strict';

const db = require('./connection.js');

function getParapost() {
  const queryStr = /*sql*/ `
    SELECT 
    users.username, 
    paraposts.parapost 
    FROM users 
    JOIN paraposts 
    ON users.id = paraposts.user_id 
    `;
  console.log('im HEREEEEEEE');
  console.log(queryStr);

  return db.query(queryStr).then((result) => {
    console.log(result.rows);
    return result.rows;
  });
}

async function storeParapost(submission) {
  const { username, parapost } = submission;

  const queryUser = /*sql*/ `
    INSERT INTO
    users(username)
    VALUES ($1)
  `;
  await db.query(queryUser, [username]);

  const queryParapost = /*sql*/ `
    INSERT INTO
    paraposts(parapost)
    VALUES ($1)
  `;
  await db.query(queryParapost, [parapost]);
}

module.exports = { getParapost, storeParapost };
