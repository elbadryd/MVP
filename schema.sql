DROP DATABASE IF EXISTS brewery;

CREATE DATABASE brewery;

USE brewery;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  guest varchar(15) NOT NULL,
  brewery varchar(20) NOT NULL,
  review varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO reviews (id , guest , brewery, review) VALUES(null, 'Dario', 'Brooklyn', 'great atmosphere');


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
