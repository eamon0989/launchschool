SELECT ROUND( COUNT(DISTINCT tickets.customer_id) /
  COUNT(DISTINCT customers.id)::decimal * 100, 2) AS percent FROM customers
LEFT OUTER JOIN tickets ON customers.id = tickets.customer_id;

theater=# \dt
         List of relations
 Schema |   Name    | Type  | Owner 
--------+-----------+-------+-------
 public | customers | table | eamon
 public | events    | table | eamon
 public | seats     | table | eamon
 public | sections  | table | eamon
 public | tickets   | table | eamon
(5 rows)

theater=# \d events
                                        Table "public.events"
   Column   |            Type             | Collation | Nullable |              Default               
------------+-----------------------------+-----------+----------+------------------------------------
 id         | integer                     |           | not null | nextval('events_id_seq'::regclass)
 name       | text                        |           | not null | 
 starts_at  | timestamp without time zone |           | not null | 
 base_price | numeric(4,2)                |           | not null | 
Indexes:
    "events_pkey" PRIMARY KEY, btree (id)
    "events_date_key" UNIQUE CONSTRAINT, btree (starts_at)
Referenced by:
    TABLE "tickets" CONSTRAINT "tickets_event_id_fkey" FOREIGN KEY (event_id) REFERENCES events(id)


theater=# \d tickets
                               Table "public.tickets"
   Column    |  Type   | Collation | Nullable |               Default               
-------------+---------+-----------+----------+-------------------------------------
 id          | integer |           | not null | nextval('tickets_id_seq'::regclass)
 event_id    | integer |           | not null | 
 seat_id     | integer |           | not null | 
 customer_id | integer |           | not null | 
Indexes:
    "tickets_pkey" PRIMARY KEY, btree (id)
    "tickets_event_id_seat_id_unique" UNIQUE CONSTRAINT, btree (event_id, seat_id)
Foreign-key constraints:
    "tickets_customer_id_fkey" FOREIGN KEY (customer_id) REFERENCES customers(id)
    "tickets_event_id_fkey" FOREIGN KEY (event_id) REFERENCES events(id)
    "tickets_seat_id_fkey" FOREIGN KEY (seat_id) REFERENCES seats(id)

theater=# \d customers
                                     Table "public.customers"
   Column   |         Type          | Collation | Nullable |                Default                
------------+-----------------------+-----------+----------+---------------------------------------
 id         | integer               |           | not null | nextval('customers_id_seq'::regclass)
 first_name | text                  |           | not null | 
 last_name  | text                  |           | not null | 
 phone      | character varying(10) |           | not null | 
 email      | text                  |           | not null | 
Indexes:
    "customers_pkey" PRIMARY KEY, btree (id)
    "customers_email_key" UNIQUE CONSTRAINT, btree (email)
Referenced by:
    TABLE "tickets" CONSTRAINT "tickets_customer_id_fkey" FOREIGN KEY (customer_id) REFERENCES customers(id)

SELECT c.id, c.email, count(DISTINCT t.event_id) 
FROM tickets AS t 
INNER JOIN customers AS c ON c.id = t.customer_id
GROUP BY c.id
HAVING count(DISTINCT t.event_id) = 3;


SELECT e.name, COUNT(t.id) AS popularity
  FROM events AS e
  LEFT OUTER JOIN tickets AS t
  ON e.id = t.event_id
  GROUP BY name
  ORDER BY popularity DESC;

SELECT id FROM customers WHERE email ='gennaro.rath@mcdermott.co';
  --  6193
SELECT * FROM events JOIN customers;

SELECT events.name AS event,
       events.starts_at,
       sections.name AS section,
       seats.row,
       seats.number AS seat
  FROM tickets
  INNER JOIN events
    ON tickets.event_id = events.id
  INNER JOIN customers
    ON tickets.customer_id = customers.id
  INNER JOIN seats
    ON tickets.seat_id = seats.id
  INNER JOIN sections
    ON seats.section_id = sections.id
  WHERE customers.email = 'gennaro.rath@mcdermott.co';