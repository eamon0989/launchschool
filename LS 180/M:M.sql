CREATE DATABASE many_to_many;

\c many_to_many

\i ~/Downloads/many_to_many.sql

many_to_many=# \dt
             List of relations
 Schema |       Name       | Type  | Owner 
--------+------------------+-------+-------
 public | books            | table | eamon
 public | books_categories | table | eamon
 public | categories       | table | eamon
(3 rows)



many_to_many=# SELECT * from books;
 id |              title              |     author      
----+---------------------------------+-----------------
  1 | A Tale of Two Cities            | Charles Dickens
  2 | Harry Potter                    | J. K. Rowling
  3 | Einstein: His Life and Universe | Walter Isaacson
(3 rows)

ALTER TABLE books_categories ALTER COLUMN book_id SET NOT NULL;
ALTER TABLE books_categories ALTER COLUMN category_id SET NOT NULL;

ALTER TABLE books_categories
  DROP CONSTRAINT "books_categories_book_id_fkey",
  ADD CONSTRAINT "books_categories_book_id_fkey"
  FOREIGN KEY ("book_id")
  REFERENCES books(id)
  ON DELETE CASCADE;

ALTER TABLE books_categories
  DROP CONSTRAINT "books_categories_category_id_fkey",
  ADD CONSTRAINT "books_categories_category_id_fkey"
  FOREIGN KEY ("category_id")
  REFERENCES categories(id)
  ON DELETE CASCADE;

SELECT b.id, b.author, string_agg(c.name, ', ') AS categories FROM books AS b
  INNER JOIN books_categories
  ON b.id = books_categories.book_id
  INNER JOIN categories AS c
  ON books_categories.book_id = c.id
  GROUP BY b.id ORDER BY b.id;

SELECT * FROM books_categories;

many_to_many=# \d books
                                   Table "public.books"
 Column |         Type          | Collation | Nullable |              Default              
--------+-----------------------+-----------+----------+-----------------------------------
 id     | integer               |           | not null | nextval('books_id_seq'::regclass)
 title  | character varying(32) |           | not null | 
 author | character varying(32) |           | not null | 
Indexes:
    "books_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "books_categories" CONSTRAINT "books_categories_book_id_fkey" FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE

many_to_many=# \d books_categories 
            Table "public.books_categories"
   Column    |  Type   | Collation | Nullable | Default 
-------------+---------+-----------+----------+---------
 book_id     | integer |           | not null | 
 category_id | integer |           | not null | 
Foreign-key constraints:
    "books_categories_book_id_fkey" FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
    "books_categories_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE

many_to_many=# \d categories
                                   Table "public.categories"
 Column |         Type          | Collation | Nullable |                Default                 
--------+-----------------------+-----------+----------+----------------------------------------
 id     | integer               |           | not null | nextval('categories_id_seq'::regclass)
 name   | character varying(32) |           | not null | 
Indexes:
    "categories_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "books_categories" CONSTRAINT "books_categories_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE



ALTER TABLE books ALTER COLUMN title TYPE text;

INSERT INTO books VALUES (DEFAULT, 'Sally Ride: America''s First Woman in Space', 'Lynn Sherr');
INSERT INTO books VALUES (DEFAULT, 'Jane Eyre', 'Charlotte Brontë');
INSERT INTO books VALUES (DEFAULT, 'Vij''s: Elegant and Inspired Indian Cuisine', 'Meeru Dhalwala and Vikram Vij');
INSERT INTO categories VALUES (DEFAULT, 'Space Exploration');
INSERT INTO categories VALUES (DEFAULT, 'Cookbook');
INSERT INTO categories VALUES (DEFAULT, 'South Asia');

INSERT INTO books_categories VALUES (5, 2);
INSERT INTO books_categories VALUES (5, 4);
INSERT INTO books_categories VALUES (6, 8);
INSERT INTO books_categories VALUES (6, 1);
INSERT INTO books_categories VALUES (6, 9);
INSERT INTO books_categories VALUES (7, 5);
INSERT INTO books_categories VALUES (7, 1);
INSERT INTO books_categories VALUES (7, 7);

ALTER TABLE books_categories ADD UNIQUE (book_id, category_id);

SELECT category.name, books_categories

string_agg(title, ', ') AS book_titles

SELECT categories.name, count(book_id) as book_count, string_agg(books.title, ', ') AS book_titles
 FROM books_categories 
  INNER JOIN categories ON categories.id = category_id
  INNER JOIN books ON books.id = books_categories.book_id
  GROUP BY categories.name
  ORDER BY categories.name;

  SELECT categories.name, count(books.id) as book_count, string_agg(books.title, ', ') AS book_titles
  FROM books
    INNER JOIN books_categories ON books.id = books_categories.book_id
    INNER JOIN categories ON books_categories.category_id = categories.id
  GROUP BY categories.name ORDER BY categories.name;