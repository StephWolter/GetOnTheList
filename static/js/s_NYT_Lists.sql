-- Drop tables if exists
DROP TABLE if exists authors;
DROP TABLE if exists titles;
DROP TABLE if exists imprints;
DROP TABLE if exists lists;
DROP TABLE if exists ownership;
DROP TABLE if exists publishers;
DROP TABLE if exists ownershipv2;
DROP TABLE if exists results;

-- Create new for authors.csv
CREATE TABLE authors (
	author_id VARCHAR(100),
	author_name VARCHAR(100)
);

SELECT *
From authors;

CREATE TABLE titles (
	book_id INT,
	book_title VARCHAR(100),
	book_image VARCHAR(100),
	book_description VARCHAR,
	author_id INT,
	imprint_id INT
);

SELECT * 
From titles;

CREATE TABLE imprints (
	imprint_id INT,
	imprint_name VARCHAR(50)
);

SELECT * 
From imprints;

CREATE TABLE ownershipv2 (
	imprint VARCHAR(100),
	publisher VARCHAR(100)
);

SELECT * 
From ownershipv2;

CREATE TABLE lists (
	list_id INT,
	list_name VARCHAR(100)
);

SELECT * 
From lists;

CREATE TABLE ownership (
	ownership_id INT,
	imprint_id INT,
	publisher_id INT
);

SELECT * 
From ownership;

CREATE TABLE publishers (
	publisher_id INT,
	publisher_name VARCHAR(100)
);

SELECT * 
From publishers;

CREATE TABLE results (
	result_id INT,
	list_id INT,
	book_id INT,
	published_date DATE,
	rank INT,
	weeks_on_list INT	
);

SELECT * 
From results;