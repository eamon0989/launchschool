CREATE DATABASE index;
\c index

CREATE TABLE authors (
  id serial PRIMARY KEY,
  name varchar(100) NOT NULL
);

CREATE TABLE books (
  id serial PRIMARY KEY,
  title varchar(100) NOT NULL,
  isbn char(13) UNIQUE NOT NULL,
  author_id int REFERENCES authors(id)
);

\d books

CREATE INDEX ON books (author_id);

\d books

\di

DROP INDEX books_author_id_idx;

\di

EXPLAIN SELECT * FROM books;

EXPLAIN SELECT books.title FROM books
JOIN authors ON books.author_id = authors.id
WHERE authors.name = 'William Gibson';

                             QUERY PLAN                             
--------------------------------------------------------------------
 Hash Join  (cost=14.03..27.32 rows=2 width=218)
   Hash Cond: (books.author_id = authors.id)
   ->  Seq Scan on books  (cost=0.00..12.60 rows=260 width=222)
   ->  Hash  (cost=14.00..14.00 rows=2 width=4)
         ->  Seq Scan on authors  (cost=0.00..14.00 rows=2 width=4)
               Filter: ((name)::text = 'William Gibson'::text)
(6 rows)

EXPLAIN SELECT title FROM books
  WHERE author_id =
  (SELECT id FROM authors
  WHERE name = 'William Gibson');