CREATE DATABASE student_db;

USE student_db;

CREATE TABLE student (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    age INT
);