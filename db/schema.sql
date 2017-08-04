DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30),
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured, date) VALUES ('Burger 1', 1, now());
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Burger 2', 0, now());
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Burger 3', 1, now());
