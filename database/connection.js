const pg = require('pg');

// if (!process.env.DATABASE_URL) {
//   throw new Error('DATABASE_URL environment variable is not set');
// }

const options = {
  // connectionString: process.env.DATABASE_URL,
  connectionString: 'postgres://paraloguser:pass123@localhost:5432/paralog',
};

const db = new pg.Pool(options);

module.exports = db;
