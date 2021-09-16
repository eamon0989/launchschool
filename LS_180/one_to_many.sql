CREATE DATABASE one_to_many;
\c one_to_many

\i ~/Downloads/one-to-many.sql

one_to_many=# \d calls
                                        Table "public.calls"
   Column   |            Type             | Collation | Nullable |              Default              
------------+-----------------------------+-----------+----------+-----------------------------------
 id         | integer                     |           | not null | nextval('calls_id_seq'::regclass)
 when       | timestamp without time zone |           | not null | 
 duration   | integer                     |           | not null | 
 contact_id | integer                     |           | not null | 
Indexes:
    "calls_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "calls_contact_id_fkey" FOREIGN KEY (contact_id) REFERENCES contacts(id)

one_to_many=# \d contacts
                                     Table "public.contacts"
   Column   |         Type          | Collation | Nullable |               Default                
------------+-----------------------+-----------+----------+--------------------------------------
 id         | integer               |           | not null | nextval('contacts_id_seq'::regclass)
 first_name | text                  |           | not null | 
 last_name  | text                  |           | not null | 
 number     | character varying(10) |           | not null | 
Indexes:
    "contacts_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "calls" CONSTRAINT "calls_contact_id_fkey" FOREIGN KEY (contact_id) REFERENCES contacts(id)


INSERT INTO calls ("when", duration, contact_id)
VALUES ('2016-01-18 14:47:00', 632, 6);

SELECT c."when", c.duration, co.first_name FROM calls AS c 
INNER JOIN contacts AS co
ON c.contact_id = co.id
WHERE contact_id <> 6;

INSERT INTO contacts 
VALUES (Default, 'Merve', 'Elk', 6343511126),
(Default, 'Sawa', 'Fyodorov', 6125594874);

INSERT INTO calls
VALUES (Default, '2016-01-17 11:52:00', 175, 26),
(Default, '2016-01-18 21:22:00', 79, 27);

ALTER TABLE contacts ADD CONSTRAINT number_unique UNIQUE (number);

INSERT INTO contacts 
VALUES (Default, 'Potts', 'John', 6343511126);
