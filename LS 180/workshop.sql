createdb workshop

psql -d workshop

CREATE TABLE devices (
  id serial PRIMARY KEY,
  name text NOT NULL,
  created_at timestamp DEFAULT NOW()
);

CREATE TABLE parts (
  id serial PRIMARY KEY,
  part_number int UNIQUE NOT NULL,
  device_id int references devices (id)
);

INSERT INTO devices (name) VALUES ('Accelerometer');
INSERT INTO devices (name) VALUES ('Gyroscope');

INSERT INTO parts (part_number, device_id) VALUES (12, 1);
INSERT INTO parts (part_number, device_id) VALUES (14, 1);
INSERT INTO parts (part_number, device_id) VALUES (16, 1);

INSERT INTO parts (part_number, device_id) VALUES (31, 2);
INSERT INTO parts (part_number, device_id) VALUES (33, 2);
INSERT INTO parts (part_number, device_id) VALUES (35, 2);
INSERT INTO parts (part_number, device_id) VALUES (37, 2);
INSERT INTO parts (part_number, device_id) VALUES (39, 2);

INSERT INTO parts (part_number) VALUES (50);
INSERT INTO parts (part_number) VALUES (54);
INSERT INTO parts (part_number) VALUES (58);


SELECT devices.name, parts.part_number
  FROM devices
  JOIN parts
    ON devices.id = parts.device_id;

SELECT * FROM parts WHERE part_number::text LIKE '3%';

SELECT devices.name, count(parts.device_id) 
  FROM devices
  LEFT OUTER JOIN parts
    ON devices.id = parts.device_id
    GROUP BY devices.name;

SELECT devices.name, count(parts.device_id) 
  FROM devices
  LEFT OUTER JOIN parts
    ON devices.id = parts.device_id
    GROUP BY devices.name
    ORDER BY devices.name DESC;

SELECT part_number, device_id
  FROM parts
    WHERE device_id IS NOT NULL;

SELECT part_number, device_id
  FROM parts
    WHERE device_id IS NULL;

INSERT INTO devices (name) VALUES ('Magnetometer');
INSERT INTO parts (part_number, device_id) VALUES (42, 3);

SELECT name AS oldest FROM devices ORDER BY created_at ASC LIMIT 1;

UPDATE parts SET device_id = 1
WHERE part_number=37 OR part_number=39;

SELECT part_number FROM parts LIMIT 1;

UPDATE parts
   SET device_id = 2 
 WHERE part_number = 
       (SELECT min(part_number) 
          FROM parts);

UPDATE parts 
SET device_id = 1
WHERE part_number IN (
  SELECT part_number
  FROM parts 
  WHERE device_id = 2
  ORDER BY part_number DESC
  LIMIT 2
);

UPDATE parts 
SET device_id = 1
WHERE part_number IN (
  SELECT part_number
  FROM parts 
  ORDER BY part_number
  LIMIT 1
);


UPDATE parts
  SET device_id = 1
  WHERE part_number =
    (
      SELECT part_number
      FROM parts
      ORDER by part_number
      LIMIT 1
    );

UPDATE parts
  SET device_id = 1
  WHERE part_number IN (
      SELECT part_number
      FROM parts
      ORDER by part_number
      LIMIT 1
    );


SELECT * FROM devices;
SELECT * FROM parts;

DELETE FROM parts WHERE device_id = 1;
DELETE FROM devices WHERE id = 1;