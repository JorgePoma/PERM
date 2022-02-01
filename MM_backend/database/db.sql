CREATE DATABASE mm;

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255),
    mark VARCHAR(255),
    model VARCHAR(255) UNIQUE,
    description VARCHAR(500),
    img VARCHAR(500) UNIQUE,
    state VARCHAR(255),
    units INT 
);