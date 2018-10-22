DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  guestName varchar(15) NOT NULL,
  brewery varchar(20) NOT NULL,
  beer varchar(20) NOT NULL,
  review varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
