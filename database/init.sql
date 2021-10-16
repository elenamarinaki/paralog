BEGIN;

DROP TABLE IF EXISTS  users, paraposts, sessions CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR (30) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE paraposts (
    id SERIAL PRIMARY KEY NOT NULL,
    parapost TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP
);

CREATE TABLE sessions (
   sid TEXT PRIMARY KEY,
   data JSON NOT NULL
);

INSERT INTO users (username, email, password) VALUES ('Elena', 'elena@test.com', 'hello');

INSERT INTO paraposts (parapost, user_id, created_at) VALUES ('The art of ambivalence!', 1, (SELECT CURRENT_TIMESTAMP));

COMMIT;