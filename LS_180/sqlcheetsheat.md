// Create a table
CREATE TABLE table_name (
    column_name column_type optional_constraint,
    column_name column_type optional_constraint
);

//Add column to an existing table
ALTER TABLE table_name ADD COLUMN column_type column_type DEFAULT default_value;

//Insert values into a table
INSERT INTO table_name (column_name, column_name) 
VALUES ('value1', value2);

SELECT * FROM table_name;

// Order by
SELECT * FROM table_name ORDER BY column_name DESC;
SELECT * FROM table_name ORDER BY column_name ASC;


// Set default Value
ALTER TABLE table_name ALTER COLUMN column_name SET DEFAULT 0;

// Set NOT NULL constraint
ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;

// Use an alias
SELECT column_name as alias_name
  FROM table_name;

// Select values between certain constraints
 SELECT colum_name
  FROM table_name
 WHERE date BETWEEN '2016-03-02' AND '2016-03-08';

 // Update values in a column
 UPDATE table_name
   SET column_name = new_value
 WHERE optional_condition;

// Change column type
ALTER TABLE table_name ALTER COLUMN column_name TYPE new_type;

Meta-commands
\dt
\d table_name
\list

Database dump:
pg_dump -d database_name -t table_name --inserts > dump.sql
pg_dump -d database_name -t table_name > dump.sql

Import a file:
\i file_path/name.sql

psql terminal commands

createdb database_name

Connect to a database:
psql -d database_name

Import a file to a database:
psql -d database_name < ~/path/file_name.sql

Add UNIQUE constraint to a column:
ALTER TABLE table_name ADD CONSTRAINT constraint_name UNIQUE (column_name);

Remove a constraint:
ALTER TABLE table_name DROP CONSTRAINT constraint_name;

Add min char constraint to a column
ALTER TABLE table_name ADD CONSTRAINT constraint_name CHECK (length(column_name) >= 1);