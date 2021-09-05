CREATE DATABASE films3

\c films3

films=# SELECT * from films;
           title           | year |   genre   |       director       | duration
---------------------------+------+-----------+----------------------+----------
 Die Hard                  | 1988 | action    | John McTiernan       |      132
 Casablanca                | 1942 | drama     | Michael Curtiz       |      102
 The Conversation          | 1974 | thriller  | Francis Ford Coppola |      113
 1984                      | 1956 | scifi     | Michael Anderson     |       90
 The Godfather             | 1972 | crime     | Francis Ford Coppola |      175
 Tinker Tailor Soldier Spy | 2011 | espionage | Tomas Alfredson      |      127
 The Birdcage              | 1996 | comedy    | Mike Nichols         |      118
(7 rows)

films=# \d films
             Table "public.films"
  Column  |          Type          | Modifiers
----------+------------------------+-----------
 title    | character varying(255) | not null
 year     | integer                | not null
 genre    | character varying(100) | not null
 director | character varying(255) | not null
 duration | integer                | not null
Indexes:
    "title_unique" UNIQUE CONSTRAINT, btree (title)
Check constraints:
    "director_name" CHECK (length(director::text) >= 1 AND "position"(director::text, ' '::text) > 0)
    "title_length" CHECK (length(title::text) >= 1)
    "year_range" CHECK (year >= 1900 AND year <= 2100)

CREATE TABLE directors (id serial PRIMARY KEY, name text NOT NULL);

INSERT INTO directors (name) VALUES ('John McTiernan');
INSERT INTO directors (name) VALUES ('Michael Curtiz');
INSERT INTO directors (name) VALUES ('Francis Ford Coppola');
INSERT INTO directors (name) VALUES ('Michael Anderson');
INSERT INTO directors (name) VALUES ('Tomas Alfredson');
INSERT INTO directors (name) VALUES ('Mike Nichols');
SELECT * FROM directors;

ALTER TABLE films ADD COLUMN director_id integer REFERENCES directors (id);

UPDATE films SET director_id=1 WHERE director = 'John McTiernan';
UPDATE films SET director_id=2 WHERE director = 'Michael Curtiz';
UPDATE films SET director_id=3 WHERE director = 'Francis Ford Coppola';
UPDATE films SET director_id=4 WHERE director = 'Michael Anderson';
UPDATE films SET director_id=5 WHERE director = 'Tomas Alfredson';
UPDATE films SET director_id=6 WHERE director = 'Mike Nichols';
SELECT * FROM films;

ALTER TABLE films ALTER COLUMN director_id SET NOT NULL;
ALTER TABLE films DROP COLUMN director;

ALTER TABLE directors ADD CONSTRAINT valid_name
  CHECK (length(name) >= 1 AND position(' ' in name) > 0);

SELECT films.title, films.year, directors.name AS director, films.duration
  FROM films INNER JOIN directors ON directors.id = films.director_id;
 