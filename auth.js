const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const model = require('./database/model');

function saveUserSession(user) {
  const sid = crypto.randomBytes(18).toString('base64');
  return model.createSession(sid, { user });
}

const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 600000,
  sameSite: 'strict',
  signed: true,
};

module.exports = { saveUserSession, COOKIE_OPTIONS };
