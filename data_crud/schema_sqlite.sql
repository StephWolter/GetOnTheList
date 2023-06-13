DROP TABLE IF EXISTS Ownership;
DROP TABLE IF EXISTS Publishers;
DROP TABLE IF EXISTS Results;
DROP TABLE IF EXISTS Books;
DROP TABLE IF EXISTS Imprints;
DROP TABLE IF EXISTS Lists;
DROP TABLE IF EXISTS Authors;


CREATE TABLE Authors (
	author_id INT,
	author_name VARCHAR(255) NOT NULL,
	PRIMARY KEY (author_id)
);

CREATE TABLE Lists (
	list_id INT,
	list_name VARCHAR(255) NOT NULL,
	PRIMARY KEY (list_id)
);

CREATE TABLE Imprints (
	imprint_id INT,
	imprint_name VARCHAR(255) NOT NULL,
	PRIMARY KEY (imprint_id)
);

CREATE TABLE Publishers (
	publisher_id INT,
	publisher_name VARCHAR(255) NOT NULL,
	PRIMARY KEY (publisher_id)
);

CREATE TABLE Ownership (
	ownership_id INT,
	imprint_id INT,
	publisher_id INT,
	PRIMARY KEY (ownership_id),
	FOREIGN KEY (imprint_id) REFERENCES Imprints(imprint_id),
	FOREIGN KEY (publisher_id) REFERENCES Publishers(publisher_id)
);

CREATE TABLE Books (
	book_id INT,
	book_title VARCHAR(255) NOT NULL,
	book_image TEXT,
	book_description TEXT,
	author_id INT,
	imprint_id INT,
	PRIMARY KEY (book_id),
	FOREIGN KEY (author_id) REFERENCES Authors(author_id),
	FOREIGN KEY (imprint_id) REFERENCES Imprints(imprint_id)
);

CREATE TABLE Results (
	result_id INT,
	list_id INT,
	book_id INT,
	published_date DATE,
	rank INT,
	weeks_on_list INT,
	PRIMARY KEY (result_id),
	FOREIGN KEY (list_id) REFERENCES Lists(list_id),
	FOREIGN KEY (book_id) REFERENCES Books(book_id)
);