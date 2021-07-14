CREATE DATABASE IF NOT EXISTS tasks_db;

USE tasks_db;

CREATE TABLE IF NOT EXISTS tasks (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(125) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO
    tasks (title, description)
VALUES
    ('task 1', 'some description'),
    ('task 2', 'some description 2');