DROP DATABASE IF EXISTS mountain_db;
CREATE DATABASE mountain_db;
USE mountain_db;

CREATE TABLE mountains
(
	id int NOT NULL AUTO_INCREMENT,
	mountain_name varchar(255) NOT NULL,
	shred BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);



