BEGIN;

DROP TABLE IF EXISTS  users, paraposts CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR (30) NOT NULL
);

CREATE TABLE paraposts (
    id SERIAL PRIMARY KEY NOT NULL,
    parapost TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (username) VALUES ('Elena');

INSERT INTO paraposts (parapost, user_id) VALUES ('The art of ambivalence!', 1);

COMMIT;