--up

CREATE TABLE Coiso1(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
);

CREATE TABLE Coiso2(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  model TEXT,
  ownerId INTEGER REFERENCES Coiso1(id)
);
INSERT INTO Coiso1 (name, email) values ('bruno', 'picadejegue@gmail.com');
INSERT INTO Coiso1 (name, email) values ('jake', 'picadeaço@gmail.com');

INSERT INTO Coiso2 (brand, model, OwnerId) values ('classic', 'C3PO', 1);
--down
DROP TABLE Coiso1;
DROP TABLE Coiso2;