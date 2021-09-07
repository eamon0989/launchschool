auction=# SELECT * FROM bidders;
 id |      name       
----+-----------------
  1 | Alison Walker
  2 | James Quinn
  3 | Taylor Williams
  4 | Alexis Jones
  5 | Gwen Miller
  6 | Alan Parker
  7 | Sam Carter
(7 rows)

auction=# SELECT * FROM bids;
 id | bidder_id | item_id | amount 
----+-----------+---------+--------
  1 |         1 |       1 |  40.00
  2 |         3 |       1 |  52.00
  3 |         1 |       1 |  53.00
  4 |         3 |       1 |  70.87
  5 |         5 |       2 |  83.25
  6 |         2 |       3 | 110.00
  7 |         4 |       3 | 140.00
  8 |         2 |       3 | 150.00
  9 |         6 |       3 | 175.00
 10 |         4 |       3 | 185.00
 11 |         2 |       3 | 200.00
 12 |         6 |       3 | 225.00
 13 |         4 |       3 | 250.00
 14 |         1 |       4 | 222.00
 15 |         2 |       4 | 262.00
 16 |         1 |       4 | 290.00
 17 |         1 |       4 | 300.00
 18 |         2 |       5 |  21.72
 19 |         6 |       5 |  23.00
 20 |         2 |       5 |  25.00
 21 |         6 |       5 |  30.00
 22 |         2 |       5 |  32.00
 23 |         6 |       5 |  33.00
 24 |         2 |       5 |  38.00
 25 |         6 |       5 |  40.00
 26 |         2 |       5 |  42.00
(26 rows)

auction=# SELECT * FROM items;
 id |     name      | initial_price | sales_price 
----+---------------+---------------+-------------
  1 | Video Game    |         39.99 |       70.87
  2 | Outdoor Grill |         51.00 |       83.25
  3 | Painting      |        100.00 |      250.00
  4 | Tent          |        220.00 |      300.00
  5 | Vase          |         20.00 |       42.00
  6 | Television    |        550.00 |      (null)
(6 rows)

SELECT bidders.*, items.* FROM bidders 
  FULL OUTER JOIN bids
  ON bidder_id = bidders.id
  FULL OUTER JOIN items 
  ON items.id = bids.item_id;

   id   |      name       |   id   |     name      | initial_price | sales_price 
--------+-----------------+--------+---------------+---------------+-------------
      1 | Alison Walker   |      1 | Video Game    |         39.99 |       70.87
      3 | Taylor Williams |      1 | Video Game    |         39.99 |       70.87
      1 | Alison Walker   |      1 | Video Game    |         39.99 |       70.87
      3 | Taylor Williams |      1 | Video Game    |         39.99 |       70.87
      5 | Gwen Miller     |      2 | Outdoor Grill |         51.00 |       83.25
      2 | James Quinn     |      3 | Painting      |        100.00 |      250.00
      4 | Alexis Jones    |      3 | Painting      |        100.00 |      250.00
      2 | James Quinn     |      3 | Painting      |        100.00 |      250.00
      6 | Alan Parker     |      3 | Painting      |        100.00 |      250.00
      4 | Alexis Jones    |      3 | Painting      |        100.00 |      250.00
      2 | James Quinn     |      3 | Painting      |        100.00 |      250.00
      6 | Alan Parker     |      3 | Painting      |        100.00 |      250.00
      4 | Alexis Jones    |      3 | Painting      |        100.00 |      250.00
      1 | Alison Walker   |      4 | Tent          |        220.00 |      300.00
      2 | James Quinn     |      4 | Tent          |        220.00 |      300.00
      1 | Alison Walker   |      4 | Tent          |        220.00 |      300.00
      1 | Alison Walker   |      4 | Tent          |        220.00 |      300.00
      2 | James Quinn     |      5 | Vase          |         20.00 |       42.00
      6 | Alan Parker     |      5 | Vase          |         20.00 |       42.00
      2 | James Quinn     |      5 | Vase          |         20.00 |       42.00
      6 | Alan Parker     |      5 | Vase          |         20.00 |       42.00
      2 | James Quinn     |      5 | Vase          |         20.00 |       42.00
      6 | Alan Parker     |      5 | Vase          |         20.00 |       42.00
      2 | James Quinn     |      5 | Vase          |         20.00 |       42.00
      6 | Alan Parker     |      5 | Vase          |         20.00 |       42.00
      2 | James Quinn     |      5 | Vase          |         20.00 |       42.00
      7 | Sam Carter      | (null) | (null)        |        (null) |      (null)
 (null) | (null)          |      6 | Television    |        550.00 |      (null)
(28 rows)

SELECT bidders.*, items.* FROM bidders 
  FULL OUTER JOIN bids
  ON bidder_id = bidders.id
  FULL OUTER JOIN items 
  ON items.id = bids.item_id;



-- SUBQUERIES
-- check if id exists in bids
SELECT DISTINCT bidders.name FROM bidders
  WHERE id IN (SELECT bidder_id FROM bids);

SELECT DISTINCT bidders.name FROM bidders
  INNER JOIN bids
  ON bidder_id = bidders.id;

-- select items not in 
SELECT items.name FROM items
  WHERE id NOT IN (SELECT item_id FROM bids);

-- select items where price > 100
SELECT name, initial_price FROM items
  WHERE initial_price > 100;

SELECT name FROM bidders
  HAVING ((SELECT sum(amount) FROM bids GROUP BY bidder_id) > 100)
  GROUP BY name; 

-- 
SELECT bidders.name, sum(amount) AS total FROM bids GROUP BY bidder_id
  HAVING sum(amount) > 100;

SELECT bidders.name, sum(amount) AS total FROM bids 
  INNER JOIN bidders
  ON bidder_id = bidders.id
  GROUP BY bidders.name
  HAVING sum(amount) > 100;



-- CHECK CONSTRAINTS
ALTER TABLE bids DROP CONSTRAINT bids_amount_check;

ALTER TABLE bids ADD CONSTRAINT "bids_amount_check" CHECK (amount >= 0.01 AND amount <= 1000.00);

-- NOT NULL CONSTRAINT

ALTER TABLE bids ALTER COLUMN item_id DROP NOT NULL;

ALTER TABLE bids ALTER COLUMN item_id SET NOT NULL;


-- FOREIGN KEY CONSTRAINTS
ALTER TABLE orders ADD CONSTRAINT orders_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);

ALTER TABLE bids ADD CONSTRAINT "bids_bidder_id_fkey" FOREIGN KEY (bidder_id) REFERENCES bidders(id) ON DELETE CASCADE;

ALTER TABLE bids DROP CONSTRAINT bids_bidder_id_fkey;

