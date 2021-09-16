CREATE DATABASE extrasolar;

CREATE TABLE stars (
  id serial PRIMARY KEY,
  name varchar(25) UNIQUE NOT NULL,
  distance int NOT NULL UNIQUE CHECK (distance > 0),
  spectral_type char(1),
  companions int NOT NULL CHECK (companions > 0)
);

CREATE TABLE planets (
  id serial PRIMARY KEY,
  designation char(1) UNIQUE,
  mass int
);

ALTER TABLE planets ADD COLUMN star_id int NOT NULL references stars (id); 

ALTER TABLE stars ALTER COLUMN name TYPE varchar(50);

ALTER TABLE stars ALTER COLUMN distance TYPE numeric;

ALTER TABLE stars
ADD CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M')),
ALTER COLUMN spectral_type SET NOT NULL;


ALTER TABLE stars DROP CONSTRAINT stars_spectral_type_check;

CREATE TYPE spectral_type_enum AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');

ALTER TABLE stars
ALTER COLUMN spectral_type TYPE spectral_type_enum
                           USING spectral_type::spectral_type_enum;

ALTER TABLE planets 
ALTER COLUMN mass TYPE numeric,
ALTER COLUMN mass SET NOT NULL,
ADD CHECK (mass > 0.0),
ALTER COLUMN designation SET NOT NULL;

ALTER TABLE planets ADD COLUMN semi_major_axis numeric NOT NULL;

ALTER TABLE planets
DROP COLUMN semi_major_axis;

-- DELETE FROM stars;
-- INSERT INTO stars (name, distance, spectral_type, companions)
--            VALUES ('Alpha Centauri B', 4.37, 'K', 3);
-- INSERT INTO stars (name, distance, spectral_type, companions)
--            VALUES ('Epsilon Eridani', 10.5, 'K', 0);

-- INSERT INTO planets (designation, mass, star_id)
--            VALUES ('b', 0.0036, 1); -- check star_id; see note below
-- INSERT INTO planets (designation, mass, star_id)
--            VALUES ('c', 0.1, 2); -- check star_id; see note below

-- ALTER TABLE planets
-- ADD COLUMN semi_major_axis numeric NOT NULL;

CREATE TABLE moons (
  id serial PRIMARY KEY,
  designation int NOT NULL CHECK (designation > 0),
  semi_major_axis numeric CHECK (semi_major_axis > 0),
  mass numeric CHECK (mass > 0.0),
  planet_id int NOT NULL references planets (id)
);

$ pg_dump --inserts extrasolar > extrasolar.dump.sql