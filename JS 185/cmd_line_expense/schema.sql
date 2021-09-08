CREATE TABLE expenses (
  id serial PRIMARY KEY,
  amount numeric(6, 2) NOT NULL,
  memo text NOT NULL,
  created_on date NOT NULL,
  CHECK (amount > 0)
);

INSERT INTO expenses VALUES (DEFAULT, 9999.99, 'biggest', '2021-09-08');
-- INSERT INTO expenses VALUES (DEFAULT, -9999.99, 'smallest', '2021-09-08');

-- ALTER TABLE expenses ADD CHECK (amount > 0);

-- INSERT INTO expenses (amount, memo, created_on) VALUES (14.56, 'Pencils', NOW());
-- INSERT INTO expenses (amount, memo, created_on) VALUES (3.29, 'Coffee', NOW());
-- INSERT INTO expenses (amount, memo, created_on) VALUES (49.99, 'Text Editor', NOW());