CREATE DATABASE sample_database;

--\c into sample_database


CREATE TABLE events(
    event_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

