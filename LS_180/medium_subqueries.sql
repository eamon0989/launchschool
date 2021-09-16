CREATE DATABASE auction;

\c auction

CREATE TABLE bidders (
  id serial PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE items (
  id serial PRIMARY KEY,
  name TEXT NOT NULL,
  initial_price decimal(6, 2) NOT NULL CHECK(initial_price BETWEEN 0.01 AND 1000.00),
  sales_price decimal(6, 2) CHECK(initial_price BETWEEN 0.01 AND 1000.00)
);

CREATE TABLE bids (
  id serial PRIMARY KEY,
  bidder_id integer NOT NULL REFERENCES bidders (id) ON DELETE CASCADE,
  item_id integer NOT NULL REFERENCES items (id) ON DELETE CASCADE,
  amount decimal(6, 2) NOT NULL CHECK(amount BETWEEN 0.01 AND 1000.00)
);

CREATE INDEX ON bids (bidder_id, item_id);

\copy bidders FROM '~/Documents/code/launchschool/LS 180/bidders.csv' WITH HEADER CSV;
\copy items FROM '~/Documents/code/launchschool/LS 180/items.csv' WITH HEADER CSV;
\copy bids FROM '~/Documents/code/launchschool/LS 180/bids.csv' WITH HEADER CSV;

SELECT name FROM items 
  WHERE id NOT IN (
    SELECT item_id FROM bids
  )
  GROUP BY items.name;

SELECT name AS "Bid on Items" FROM items 
  WHERE items.id IN (
    SELECT item_id FROM bids
  )
  GROUP BY items.name;

SELECT name AS "Bid on Items" FROM items
  WHERE items.id IN (SELECT DISTINCT item_id FROM bids);

SELECT DISTINCT name AS "Bid on Items" FROM items
   JOIN bids ON items.id = bids.item_id;

SELECT DISTINCT name AS "Not Bid On" FROM items 
  WHERE id NOT IN (
    SELECT item_id FROM bids
  );

SELECT name AS "Not Bid On" FROM items
WHERE NOT items.id IN (SELECT item_id FROM bids);

SELECT DISTINCT bidders.name FROM bidders
WHERE bidders.id IN (
  SELECT bids.bidder_id FROM bids
);

SELECT bidders.name FROM bidders
WHERE EXISTS (
  SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id
);

SELECT DISTINCT bidders.name FROM bidders
  JOIN bids
  ON bids.bidder_id = bidders.id;

SELECT name FROM bidders
  INNER JOIN bids
  ON bidders.id = bidder_id
  GROUP BY bidders.id
  ORDER BY bidders.id;

SELECT max FROM
  (SELECT column_name FROM a_table) AS max

SELECT max(bid_counts.count) FROM
  (SELECT count(bidder_id) FROM bids GROUP BY bidder_id) AS bid_counts;
  
SELECT COUNT(bidder_id) AS max_bid FROM bids
  GROUP BY bidder_id
  ORDER BY max_bid DESC
  LIMIT 1;

SELECT items.name, (SELECT count(item_id) FROM bids WHERE item_id = items.id) 
  FROM items;

SELECT items.name, count(bids.item_id) FROM items
  LEFT OUTER JOIN bids
  ON bids.item_id = items.id
  GROUP BY items.name, item_id
  ORDER BY item_id;

SELECT id FROM items 
  WHERE ROW('Painting', 100.00, 250.00) =
  ROW(name, initial_price, sales_price);

SELECT id FROM items 
WHERE (name, initial_price, sales_price) = ('Painting', 100.00, 250.00);

EXPLAIN SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

                                QUERY PLAN                                
--------------------------------------------------------------------------
 Hash Join  (cost=33.38..66.47 rows=635 width=32)
   Hash Cond: (bidders.id = bids.bidder_id)
   ->  Seq Scan on bidders  (cost=0.00..22.70 rows=1270 width=36)
   ->  Hash  (cost=30.88..30.88 rows=200 width=4)
         ->  HashAggregate  (cost=28.88..30.88 rows=200 width=4)
               Group Key: bids.bidder_id
               ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4)
(7 rows)



EXPLAIN (FORMAT JSON, ANALYZE, VERBOSE) SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

                                                     QUERY PLAN                                                      
---------------------------------------------------------------------------------------------------------------------
 Hash Join  (cost=33.38..66.47 rows=635 width=32) (actual time=0.159..0.201 rows=6 loops=1)
   Hash Cond: (bidders.id = bids.bidder_id)
   ->  Seq Scan on bidders  (cost=0.00..22.70 rows=1270 width=36) (actual time=0.011..0.022 rows=7 loops=1)
   ->  Hash  (cost=30.88..30.88 rows=200 width=4) (actual time=0.123..0.129 rows=6 loops=1)
         Buckets: 1024  Batches: 1  Memory Usage: 9kB
         ->  HashAggregate  (cost=28.88..30.88 rows=200 width=4) (actual time=0.100..0.113 rows=6 loops=1)
               Group Key: bids.bidder_id
               Batches: 1  Memory Usage: 40kB
               ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4) (actual time=0.007..0.047 rows=26 loops=1)
 Planning Time: 0.218 ms
 Execution Time: 0.258 ms

                                                         QUERY PLAN                                                         
----------------------------------------------------------------------------------------------------------------------------
 Hash Join  (cost=33.38..66.47 rows=635 width=32) (actual time=0.141..0.180 rows=6 loops=1)
   Output: bidders.name
   Inner Unique: true
   Hash Cond: (bidders.id = bids.bidder_id)
   ->  Seq Scan on public.bidders  (cost=0.00..22.70 rows=1270 width=36) (actual time=0.010..0.020 rows=7 loops=1)
         Output: bidders.id, bidders.name
   ->  Hash  (cost=30.88..30.88 rows=200 width=4) (actual time=0.122..0.129 rows=6 loops=1)
         Output: bids.bidder_id
         Buckets: 1024  Batches: 1  Memory Usage: 9kB
         ->  HashAggregate  (cost=28.88..30.88 rows=200 width=4) (actual time=0.099..0.113 rows=6 loops=1)
               Output: bids.bidder_id
               Group Key: bids.bidder_id
               Batches: 1  Memory Usage: 40kB
               ->  Seq Scan on public.bids  (cost=0.00..25.10 rows=1510 width=4) (actual time=0.005..0.044 rows=26 loops=1)
                     Output: bids.bidder_id
 Planning Time: 0.239 ms
 Execution Time: 0.233 ms

The execution plan shows how the table(s) referenced by the statement will be scanned —
by plain sequential scan, index scan, etc. —
and if multiple tables are referenced, what join algorithms will be used to bring
together the required rows from each input table

two numbers are shown: the start-up cost before the first row can be returned,
and the total cost to return all the rows.

in contexts such as a subquery in EXISTS, the planner will choose the smallest start-up
cost instead of the smallest total cost

EXPLAIN (FORMAT JSON, ANALYZE) SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

EXPLAIN (FORMAT JSON, ANALYZE, VERBOSE) SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);
                     QUERY PLAN                      
-----------------------------------------------------
 [                                                  +
   {                                                +
     "Plan": {                                      +
       "Node Type": "Hash Join",                    +
       "Parallel Aware": false,                     +
       "Join Type": "Inner",                        +
       "Startup Cost": 33.38,                       +
       "Total Cost": 66.47,                         +
       "Plan Rows": 635,                            +
       "Plan Width": 32,                            +
       "Actual Startup Time": 0.112,                +
       "Actual Total Time": 0.147,                  +
       "Actual Rows": 6,                            +
       "Actual Loops": 1,                           +
       "Output": ["bidders.name"],                  +
       "Inner Unique": true,                        +
       "Hash Cond": "(bidders.id = bids.bidder_id)",+
       "Plans": [                                   +
         {                                          +
           "Node Type": "Seq Scan",                 +
           "Parent Relationship": "Outer",          +
           "Parallel Aware": false,                 +
           "Relation Name": "bidders",              +
           "Schema": "public",                      +
           "Alias": "bidders",                      +
           "Startup Cost": 0.00,                    +
           "Total Cost": 22.70,                     +
           "Plan Rows": 1270,                       +
           "Plan Width": 36,                        +
           "Actual Startup Time": 0.007,            +
           "Actual Total Time": 0.017,              +
           "Actual Rows": 7,                        +
           "Actual Loops": 1,                       +
           "Output": ["bidders.id", "bidders.name"] +
         },                                         +
         {                                          +
           "Node Type": "Hash",                     +
           "Parent Relationship": "Inner",          +
           "Parallel Aware": false,                 +
           "Startup Cost": 30.88,                   +
           "Total Cost": 30.88,                     +
           "Plan Rows": 200,                        +
           "Plan Width": 4,                         +
           "Actual Startup Time": 0.097,            +
           "Actual Total Time": 0.103,              +
           "Actual Rows": 6,                        +
           "Actual Loops": 1,                       +
           "Output": ["bids.bidder_id"],            +
           "Hash Buckets": 1024,                    +
           "Original Hash Buckets": 1024,           +
           "Hash Batches": 1,                       +
           "Original Hash Batches": 1,              +
           "Peak Memory Usage": 9,                  +
           "Plans": [                               +
             {                                      +
               "Node Type": "Aggregate",            +
               "Strategy": "Hashed",                +
               "Partial Mode": "Simple",            +
               "Parent Relationship": "Outer",      +
               "Parallel Aware": false,             +
               "Startup Cost": 28.88,               +
               "Total Cost": 30.88,                 +
               "Plan Rows": 200,                    +
               "Plan Width": 4,                     +
               "Actual Startup Time": 0.077,        +
               "Actual Total Time": 0.090,          +
               "Actual Rows": 6,                    +
               "Actual Loops": 1,                   +
               "Output": ["bids.bidder_id"],        +
               "Group Key": ["bids.bidder_id"],     +
               "Planned Partitions": 0,             +
               "HashAgg Batches": 1,                +
               "Peak Memory Usage": 40,             +
               "Disk Usage": 0,                     +
               "Plans": [                           +
                 {                                  +
                   "Node Type": "Seq Scan",         +
                   "Parent Relationship": "Outer",  +
                   "Parallel Aware": false,         +
                   "Relation Name": "bids",         +
                   "Schema": "public",              +
                   "Alias": "bids",                 +
                   "Startup Cost": 0.00,            +
                   "Total Cost": 25.10,             +
                   "Plan Rows": 1510,               +
                   "Plan Width": 4,                 +
                   "Actual Startup Time": 0.004,    +
                   "Actual Total Time": 0.039,      +
                   "Actual Rows": 26,               +
                   "Actual Loops": 1,               +
                   "Output": ["bids.bidder_id"]     +
                 }                                  +
               ]                                    +
             }                                      +
           ]                                        +
         }                                          +
       ]                                            +
     },                                             +
     "Planning Time": 0.118,                        +
     "Triggers": [                                  +
     ],                                             +
     "Execution Time": 0.183                        +
   }                                                +
 ]
(1 row)



EXPLAIN ANALYZE SELECT MAX(bid_counts.count) FROM
  (SELECT COUNT(bidder_id) FROM bids GROUP BY bidder_id) AS bid_counts;

                                                  QUERY PLAN                                                   
---------------------------------------------------------------------------------------------------------------
 Aggregate  (cost=37.15..37.16 rows=1 width=8) (actual time=0.100..0.106 rows=1 loops=1)
   ->  HashAggregate  (cost=32.65..34.65 rows=200 width=12) (actual time=0.079..0.092 rows=6 loops=1)
         Group Key: bids.bidder_id
         Batches: 1  Memory Usage: 40kB
         ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4) (actual time=0.004..0.034 rows=26 loops=1)
 Planning Time: 0.076 ms
 Execution Time: 0.158 ms
(7 rows)


EXPLAIN ANALYZE SELECT COUNT(bidder_id) AS max_bid FROM bids
  GROUP BY bidder_id
  ORDER BY max_bid DESC
  LIMIT 1;

                                                       QUERY PLAN                                                      
---------------------------------------------------------------------------------------------------------------------
 Limit  (cost=35.65..35.65 rows=1 width=12) (actual time=0.151..0.162 rows=1 loops=1)
   ->  Sort  (cost=35.65..36.15 rows=200 width=12) (actual time=0.147..0.154 rows=1 loops=1)
         Sort Key: (count(bidder_id)) DESC
         Sort Method: top-N heapsort  Memory: 25kB
         ->  HashAggregate  (cost=32.65..34.65 rows=200 width=12) (actual time=0.104..0.120 rows=6 loops=1)
               Group Key: bidder_id
               Batches: 1  Memory Usage: 40kB
               ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4) (actual time=0.007..0.045 rows=26 loops=1)
 Planning Time: 0.148 ms
 Execution Time: 0.210 ms
(10 rows)
