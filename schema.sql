-- DROP DATABASE questions_answers;
-- CREATE DATABASE questions_answers;

DROP TABLE questions;
CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  product_id INT,
  body VARCHAR(1000) NOT NULL,
  date varchar(13),
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  reported BOOLEAN,
  helpful INT
);

DROP TABLE answers;
CREATE TABLE IF NOT EXISTS answers (
  id SERIAL PRIMARY KEY,
  question_id INT,
  body VARCHAR(1000) NOT NULL,
  date_written varchar(13),
  answerer_name VARCHAR(50) NOT NULL,
  answerer_email  VARCHAR(50) NOT NULL,
  reported BOOLEAN,
  helpful INT
);

DROP TABLE answers_photos;
CREATE TABLE IF NOT EXISTS answers_photos (
  id SERIAL PRIMARY KEY,
  answer_id INT,
  url VARCHAR(1000)
);

-- To seed database:
COPY questions(product_id, body, date, username, email, reported, helpful)
FROM '/home/katie/hackreactor/SDC/data/questions.csv'
DELIMITER ','
CSV HEADER;

COPY answers(question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
FROM '/home/katie/hackreactor/SDC/data/answers.csv'
DELIMITER ','
CSV HEADER;

COPY answers_photos(answer_id, url)
FROM '/home/katie/hackreactor/SDC/data/answers_photos.csv'
DELIMITER ','
CSV HEADER;

-- TODO: