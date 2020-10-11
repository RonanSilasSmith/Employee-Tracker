DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;


CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  salary INTEGER UNSIGNED NOT NULL,
  party_id INTEGER UNSIGNED,
  CONSTRAINT fk_party FOREIGN KEY (party_id) REFERENCES parties(id) ON DELETE SET NULL
);

CREATE TABLE roles (
  id INTEGER PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  department_id INTEGER UNSIGNED;
);

CREATE TABLE departments (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
);