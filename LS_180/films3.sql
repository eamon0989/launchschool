films7=# \dt
         List of relations
 Schema |   Name    | Type  | Owner 
--------+-----------+-------+-------
 public | directors | table | eamon
 public | films     | table | eamon
(2 rows)

films7=# \d films
                                      Table "public.films"
   Column    |          Type          | Collation | Nullable |              Default              
-------------+------------------------+-----------+----------+-----------------------------------
 id          | integer                |           | not null | nextval('films_id_seq'::regclass)
 title       | character varying(255) |           | not null | 
 year        | integer                |           | not null | 
 genre       | character varying(100) |           | not null | 
 duration    | integer                |           | not null | 
 director_id | integer                |           | not null | 
Indexes:
    "films_pkey" PRIMARY KEY, btree (id)
    "title_unique" UNIQUE CONSTRAINT, btree (title)
Check constraints:
    "title_length" CHECK (length(title::text) >= 1)
    "year_range" CHECK (year >= 1900 AND year <= 2100)
Foreign-key constraints:
    "films_director_id_fkey" FOREIGN KEY (director_id) REFERENCES directors(id)

films7=# \d directors
                            Table "public.directors"
 Column |  Type   | Collation | Nullable |                Default                
--------+---------+-----------+----------+---------------------------------------
 id     | integer |           | not null | nextval('directors_id_seq'::regclass)
 name   | text    |           | not null | 
Indexes:
    "directors_pkey" PRIMARY KEY, btree (id)
Check constraints:
    "valid_name" CHECK (length(name) >= 1 AND "position"(name, ' '::text) > 0)
Referenced by:
    TABLE "films" CONSTRAINT "films_director_id_fkey" FOREIGN KEY (director_id) REFERENCES directors(id)

CREATE TABLE directors_films (
  id serial PRIMARY KEY,
  director_id integer REFERENCES directors (id),
  film_id integer REFERENCES films (id)
);

films7=# SELECT * FROM directors;
 id |         name         
----+----------------------
  1 | John McTiernan
  2 | Michael Curtiz
  3 | Francis Ford Coppola
  4 | Michael Anderson
  5 | Tomas Alfredson
  6 | Mike Nichols
  7 | Sidney Lumet
  8 | Penelope Spheeris
(8 rows)


films7=# SELECT * FROM films;
 id |           title           | year |   genre   | duration | director_id 
----+---------------------------+------+-----------+----------+-------------
  1 | Die Hard                  | 1988 | action    |      132 |           1
  2 | Casablanca                | 1942 | drama     |      102 |           2
  3 | The Conversation          | 1974 | thriller  |      113 |           3
  4 | 1984                      | 1956 | scifi     |       90 |           4
  5 | Tinker Tailor Soldier Spy | 2011 | espionage |      127 |           5
  6 | The Birdcage              | 1996 | comedy    |      118 |           6
  7 | The Godfather             | 1972 | crime     |      175 |           3
  8 | 12 Angry Men              | 1957 | drama     |       96 |           7
  9 | Wayne''s World            | 1992 | comedy    |       95 |           8
 10 | Let the Right One In      | 2008 | horror    |      114 |           4
(10 rows)

films7=# \d directors_films
                               Table "public.directors_films"
   Column    |  Type   | Collation | Nullable |                   Default                   
-------------+---------+-----------+----------+---------------------------------------------
 id          | integer |           | not null | nextval('directors_films_id_seq'::regclass)
 director_id | integer |           |          | 
 film_id     | integer |           |          | 
Indexes:
    "directors_films_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "directors_films_director_id_fkey" FOREIGN KEY (director_id) REFERENCES directors(id)
    "directors_films_film_id_fkey" FOREIGN KEY (film_id) REFERENCES films(id)

INSERT INTO directors_films (film_id, director_id) VALUES (1, 1);
INSERT INTO directors_films (film_id, director_id) VALUES (2, 2);
INSERT INTO directors_films (film_id, director_id) VALUES (3, 3);
INSERT INTO directors_films (film_id, director_id) VALUES (4, 4);
INSERT INTO directors_films (film_id, director_id) VALUES (5, 5);
INSERT INTO directors_films (film_id, director_id) VALUES (6, 6);
INSERT INTO directors_films (film_id, director_id) VALUES (7, 3);
INSERT INTO directors_films (film_id, director_id) VALUES (8, 7);
INSERT INTO directors_films (film_id, director_id) VALUES (9, 8);
INSERT INTO directors_films (film_id, director_id) VALUES (10, 4);

ALTER TABLE films DROP COLUMN director_id;

SELECT films.title, directors.name FROM films 
  JOIN directors_films 
  ON films.id = directors_films.film_id
  JOIN directors
  ON directors.id = directors_films.director_id
  ORDER BY films.title;

INSERT INTO films
  VALUES (DEFAULT, 'Fargo',	1996,	'comedy',	98),
  (DEFAULT, 'No Country for Old Men',	2007,	'western', 122),
  (DEFAULT, 'Sin City',	2005,	'crime',	124),
  (DEFAULT, 'Spy Kids',	2001,	'scifi',	88);

INSERT INTO directors
  VALUES (DEFAULT, 'Joel Coen'),
  (DEFAULT, 'Ethan Coen'),
  (DEFAULT, 'Frank Miller'),
  (DEFAULT, 'Robert Rodriguez');

INSERT INTO directors_films
  VALUES (DEFAULT, 9, 11),
  (DEFAULT, 9, 12),
  (DEFAULT, 10, 12),
  (DEFAULT, 11, 13),
  (DEFAULT, 12, 13),
  (DEFAULT, 12, 14);

SELECT directors.name AS director, count(films.title) AS films
  FROM films
    INNER JOIN directors_films ON directors_films.film_id = films.id
    INNER JOIN directors ON directors.id = directors_films.director_id
    GROUP BY directors.name
    ORDER BY films DESC, directors.name ASC;