-- CREATE DATABASE todo-lists;

CREATE TABLE todo_lists (
  id serial PRIMARY KEY,
  title teXt NOT NULL UNIQUE
);

CREATE TABLE todos (
  id serial PRIMARY KEY,
  title text NOT NULL,
  done boolean NOT NULL DEFAULT false,
  todolist_id integer NOT NULL 
    REFERENCES todo_lists (id)
    ON DELETE CASCADE
);

