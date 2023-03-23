
DROP DATABASE IF EXISTS auto_correct_db;
CREATE DATABASE auto_correct_db;
USE auto_correct_db;



CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    pass VARCHAR(50) NOT NULL
);

CREATE TABLE auto_corrects (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
    typo VARCHAR(100) UNIQUE NOT NULL,
    correction VARCHAR(1000) NOT NULL,
    author INT NOT NULL,
    FOREIGN KEY (author) REFERENCES users(id)
);

CREATE TABLE usage (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    auto_correct_id INT NOT NULL,
    times_used INT,
    FOREIGN KEY (auto_correct_id) REFERENCES auto_corrects(id),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- CREATE TABLE custom (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
--     custom_name VARCHAR
--     auto_correct_ids
--     user_id
-- );

-- CREATE TABLE everything (

-- )