CREATE DATABASE billing;
\c billing

CREATE TABLE customers (
  id serial PRIMARY KEY,
  name text NOT NULL,
  payment_token char(8) NOT NULL
);

ALTER TABLE customers ADD UNIQUE CHECK (payment_token ~ '^[A-Z]{8}$';

CREATE TABLE services (
  id serial PRIMARY KEY,
  description text NOT NULL,
  payment_token numeric(10, 2) NOT NULL CHECK (payment_token >= 0.00)
);

INSERT INTO customers 
  VALUES (1, 'Pat Johnson', 'XHGOAHEQ'),
  (2, 'Nancy Monreal', 'JKWQPJKL'),
  (3, 'Lynn Blake', 'KLZXWEEE'),
  (4, 'Chen Ke-Hua', 'KWETYCVX'),
  (5, 'Scott Lakso', 'UUEAPQPS'),
  (6, 'Jim Pornot', 'XKJEYAZA');

INSERT INTO services 
  VALUES (1, 'Unix Hosting ', 5.95),
  (2, 'DNS', 4.95),
  (3, 'Whois Registration', 1.95),
  (4, 'High Bandwidth', 15.00),
  (5, 'Business Support', 250.00),
  (6, 'Dedicated Hosting', 50.00),
  (7, 'Bulk Email', 250.00),
  (8, 'One-to-one Training', 999.00);

Table "public.customers"
    Column     |     Type     | Collation | Nullable |                Default                
---------------+--------------+-----------+----------+---------------------------------------
 id            | integer      |           | not null | nextval('customers_id_seq'::regclass)
 name          | text         |           | not null | 
 payment_token | character(8) |           | not null | 
Indexes:
    "customers_pkey" PRIMARY KEY, btree (id)

Table "public.services"
    Column     |     Type      | Collation | Nullable |               Default                
---------------+---------------+-----------+----------+--------------------------------------
 id            | integer       |           | not null | nextval('services_id_seq'::regclass)
 description   | text          |           | not null | 
 payment_token | numeric(10,2) |           | not null | 
Indexes:
    "services_pkey" PRIMARY KEY, btree (id)
Check constraints:
    "services_payment_token_check" CHECK (payment_token > 0.00)

CREATE TABLE customers_services (
  id serial PRIMARY KEY,
  customer_id integer references customers (id) ON DELETE CASCADE,
  services_id integer references services (id)
);

ALTER TABLE customers_services ALTER COLUMN customer_id SET NOT NULL;
ALTER TABLE customers_services ALTER COLUMN service_id SET NOT NULL;

ALTER TABLE customers_services ADD UNIQUE (customer_id, services_id);

Table "public.customers_services"
   Column    |  Type   | Collation | Nullable |                    Default                     
-------------+---------+-----------+----------+------------------------------------------------
 id          | integer |           | not null | nextval('customers_services_id_seq'::regclass)
 customer_id | integer |           |          | 
 services_id | integer |           |          | 
Indexes:
    "customers_services_pkey" PRIMARY KEY, btree (id)
    "customers_services_customer_id_services_id_key" UNIQUE CONSTRAINT, btree (customer_id, services_id)
Foreign-key constraints:
    "customers_services_customer_id_fkey" FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
    "customers_services_services_id_fkey" FOREIGN KEY (services_id) REFERENCES services(id)

INSERT INTO customers_services
  VALUES (DEFAULT, 1, 1),
(DEFAULT, 1, 2),
(DEFAULT, 1, 3),
(DEFAULT, 3, 1),
(DEFAULT, 3, 2),
(DEFAULT, 3, 3),
(DEFAULT, 3, 4),
(DEFAULT, 3, 5),
(DEFAULT, 4, 1),
(DEFAULT, 4, 4),
(DEFAULT, 5, 1),
(DEFAULT, 5, 2),
(DEFAULT, 5, 6),
(DEFAULT, 6, 1),
(DEFAULT, 6, 6),
(DEFAULT, 6, 7);


SELECT customers.name, string_agg(s.description, ', ') AS services FROM customers
  INNER JOIN customers_services AS cs
  ON cs.customer_id = customers.id
  INNER JOIN services AS s
  ON cs.services_id = s.id
  GROUP BY customers.name;


SELECT DISTINCT customers.* FROM customers
    LEFT OUTER JOIN customers_services
    ON customers.id = customer_id
    WHERE services_id IS NULL;

SELECT customers.* FROM customers
    INNER JOIN customers_services AS cs
    ON customers.id = cs.customer_id
    GROUP BY customers.id;

SELECT * FROM customers
  WHERE EXISTS (
    SELECT 1 FROM customers_services
      WHERE customers_services.customer_id = customers.id
    );

SELECT * FROM customers
  WHERE NOT EXISTS (
    SELECT 1 FROM customers_services
      WHERE customers_services.customer_id = customers.id
    );

SELECT DISTINCT customers.*, customers_services.* FROM customers
    LEFT OUTER JOIN customers_services
    ON customers.id = customer_id
    WHERE services_id IS NULL;

SELECT DISTINCT customers.*, services.* FROM customers
    FULL OUTER JOIN customers_services
    ON customers.id = customer_id
    FULL OUTER JOIN services
    ON services.id = services_id
    WHERE customers.id IS NULL OR services.id IS NULL;

SELECT customers.name, string_agg(services.description, ', ') AS services 
  FROM customers
  LEFT OUTER JOIN customers_services
  ON customers.id = customer_id
  LEFT OUTER JOIN services
  ON services.id = services_id
  GROUP BY customers.id;

SELECT customers.name, string_agg(services.description, E'\n') AS services 
  FROM customers
  LEFT OUTER JOIN customers_services
  ON customers.id = customer_id
  LEFT OUTER JOIN services
  ON services.id = services_id
  GROUP BY customers.id;

SELECT description FROM customers_services
    RIGHT OUTER JOIN services
    ON services.id = services_id
    WHERE services_id.id IS NULL;

SELECT c.name, 
       coalesce(string_agg(s.description, ', '), '(none)') AS services 
  FROM customers c 
  LEFT JOIN customers_services cs ON c.id = cs.customer_id
  LEFT JOIN services s ON cs.service_id = s.id
 GROUP BY c.name;

SELECT 
       CASE ROW_NUMBER() OVER (PARTITION BY c.name)
       WHEN 1 THEN c.name
       ELSE '' 
       END AS name, 
       s.description AS services
  FROM customers c 
  LEFT JOIN customers_services cs ON c.id = cs.customer_id 
  LEFT JOIN services s ON cs.service_id = s.id;

SELECT
       CASE lag(c.name) OVER (ORDER BY c.name)
       WHEN c.name THEN '' 
       ELSE c.name
       END,
       s.description AS services
  FROM customers c
  LEFT JOIN customers_services cs ON c.id = cs.customer_id 
  LEFT JOIN services s ON cs.service_id = s.id;

SELECT name, description FROM customers
  LEFT JOIN customers_services ON customers.id = customer_id
  LEFT JOIN services ON services.id = service_id;

SELECT lag(null, 1, name) OVER (PARTITION BY name ORDER BY name) AS name, description FROM customers
  LEFT JOIN customers_services ON customers.id = customer_id
  LEFT JOIN services ON services.id = service_id;

SELECT services.description, count()

SELECT services.description, count(services_id) AS count FROM services
  LEFT OUTER JOIN customers_services AS cs
  ON cs.services_id = services.id
  GROUP BY services.description
  HAVING count(services_id) > 2
  ORDER BY description;

SELECT services.*, count(services_id) AS count FROM services
  LEFT OUTER JOIN customers_services AS cs
  ON cs.services_id = services.id
  GROUP BY services.description
  ORDER BY description;

SELECT SUM(services.payment_token) AS gross 
  FROM customers_services
  LEFT OUTER JOIN services
  ON services_id = services.id;
  
SELECT SUM(price) as gross
FROM services
INNER JOIN customers_services
        ON service_id = services.id;

INSERT INTO customers (name, payment_token)
  VALUES ('John Doe', 'EYODHLCN');

INSERT INTO customers (name, payment_token)
  VALUES ('John Doe', 'EYODHLCN');

SELECT SUM(services.payment_token) as gross
  FROM services
  INNER JOIN customers_services
        ON customers_services.services_id = services.id
  WHERE services.payment_token >= 100;

SELECT SUM(services.payment_token)
  FROM customers
  CROSS JOIN services
  WHERE services.payment_token >= 100;

SELECT *
  FROM customers
  CROSS JOIN services
  WHERE services.payment_token > 100;

SELECT services.payment_token
  FROM customers
  CROSS JOIN services
  WHERE services.payment_token >= 100;

DELETE FROM customers_services
WHERE service_id = 7;

DELETE FROM services
WHERE description = 'Bulk Email';

DELETE FROM customers
WHERE name = 'Chen Ke-Hua';