CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250),
	"description" text,
  "complete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todo" ("task", "description")
VALUES 
('Check up', 'set up appointment with clinic'),
('Deposit check', 'run to bank end of the week');

UPDATE "todo" SET "complete" = TRUE WHERE "id" = 2;

DELETE FROM "todo" WHERE "id" = 3;