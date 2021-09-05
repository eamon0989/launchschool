new_db=# \dt
         List of relations
 Schema |   Name   | Type  | Owner 
--------+----------+-------+-------
 public | orders   | table | eamon
 public | products | table | eamon
(2 rows)

new_db=# \d orders
                              Table "public.orders"
   Column   |  Type   | Collation | Nullable |              Default               
------------+---------+-----------+----------+------------------------------------
 id         | integer |           | not null | nextval('orders_id_seq'::regclass)
 product_id | integer |           |          | 
 quantity   | integer |           | not null | 
Indexes:
    "orders_pkey" PRIMARY KEY, btree (id)

new_db=# \d products
                            Table "public.products"
 Column |  Type   | Collation | Nullable |               Default                
--------+---------+-----------+----------+--------------------------------------
 id     | integer |           | not null | nextval('products_id_seq'::regclass)
 name   | text    |           | not null | 
Indexes:
    "products_pkey" PRIMARY KEY, btree (id)

ALTER TABLE orders ADD CONSTRAINT orders_product_id_fkey FOREIGN KEY (product_id) references products (id);

INSERT INTO products VALUES (Default, 'small bolt');
INSERT INTO products VALUES (Default, 'large bolt');

INSERT INTO orders (product_id, quantity)
VALUES (1, 10),
(1, 25),
(2, 15);

SELECT o.quantity, p.name FROM orders AS o
INNER JOIN products AS p
ON o.product_id = p.id;

INSERT INTO orders (quantity)
VALUES (100);

DELETE FROM orders WHERE product_id IS NULL;
ALTER TABLE orders ALTER COLUMN product_id SET NOT NULL;

CREATE TABLE reviews (
  id serial PRIMARY KEY,
  products_id int references products (id),
  body text NOT NULL
);

INSERT INTO reviews (products_id, body)
VALUES (1, 'a little small'),
 (1, 'very round'),
 (2, 'could have been smaller');