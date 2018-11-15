CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT ,
  message TEXT NOT NULL,
  romeName VARCHAR(50) NOT NULL ,
  userId INTEGER NOT NULL,
  createdAt DATE NOT NULL
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT ,
  name TEXT NOT NULL
);


ALTER TABLE messages ADD FOREIGN KEY (userId) REFERENCES users (id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
