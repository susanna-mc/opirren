 CREATE TABLE users(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username varchar(70) NOT NULL UNIQUE,
  password_hash varchar(70) NOT NULL UNIQUE,
  email varchar(90),
);

insert into users (username, password_hash) values ('jose', 'asd123')

SELECT * FROM users WHERE users.username = 'jose';