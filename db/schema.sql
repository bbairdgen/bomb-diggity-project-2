DROP DATABASE IF EXISTS auto_correct_db;
CREATE DATABASE auto_correct_db;
USE auto_correct_db;



CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    pass VARCHAR(50) NOT NULL
);

CREATE TABLE autocorrects (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
    typo VARCHAR(100) NOT NULL,
    correction VARCHAR(1000) NOT NULL,
    author INT NOT NULL,
    FOREIGN KEY (author) REFERENCES users(id)
);

CREATE TABLE used (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    autocorrectid INT NOT NULL,
    timesused INT,
    FOREIGN KEY (autocorrectid) REFERENCES autocorrects(id),
    userid INT NOT NULL,
    FOREIGN KEY (userid) REFERENCES users(id)
);