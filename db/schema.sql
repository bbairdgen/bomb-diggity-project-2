-- create type of database that we want

DROP DATABASE IF EXISTS auto_correct_db;
CREATE DATABASE auto_correct_db;
USE auto_correct_db;



CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    pass VARCHAR(50) NOT NULL,
    correct_ids INT,
    FOREIGN KEY (correct_ids) REFERENCES auto_corrects(id)
);

CREATE TABLE auto_corrects (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
    typo VARCHAR(100) UNIQUE NOT NULL,
    correction VARCHAR(1000) NOT NULL,
    times_used INT,
    author INT NOT NULL,
    FOREIGN KEY (author) REFERENCES users(id)
);


