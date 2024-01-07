CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250),
	"description" text,
  "complete" BOOLEAN DEFAULT FALSE
);