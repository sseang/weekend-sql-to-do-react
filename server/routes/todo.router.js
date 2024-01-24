const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// GET
router.get("/", (req, res) => {
  //query to SQL
  const queryText = `SELECT * FROM "todo";`;
  //pool for query and data
  pool
    .query(queryText)
    //promises
    .then((result) => {
      //confirm and label data
      console.log("RESULTS:", result);
      //send data
      res.send(result.rows);
    })
    //catch to error
    .catch((error) => {
      //confirm and label if error
      console.log("ERROR:", error);
      //internal errors
      res.sendStatus(500);
    });
});

// POST
router.post("/", (req, res) => {
  //var to hold data property
  let sqlData = req.body;
  //query to SQL
  const queryText = `INSERT INTO "todo" ("task", "description")
    VALUES
    ($1, $2);`;
  //update data
  const queryArgs = [sqlData.task, sqlData.description];

  //confirm and label data
  console.log("POST results", queryArgs);
  //pool for query and data
  pool
    .query(queryText, queryArgs)
    //promises
    .then((result) => {
      //confirm good data
      res.sendStatus(201);
    })
    //catch errors
    .catch((error) => {
      //confirm and label if error
      console.log("OH SNAP!!!:", error);
      //internal errors
      res.sendStatus(500);
    });
});

// PUT
router.put("/:todoID", (req, res) => {
  //var to hold data property
  const sqlID = req.params.todoID;
  //update data
  const sqlData = req.body;
  //query to SQL
  const queryText = `UPDATE "todo" SET "complete" = NOT "complete" WHERE "id" = $1;`;
  //pool for query and data
  pool
    .query(queryText, [sqlID])
    //promises
    .then((result) => {
      //confirm good data
      res.sendStatus(200);
    })
    //catch errors
    .catch((error) => {
      //confirm and label if error
      console.log("OH SHOOT!!!:", error);
      //internal errors
      res.sendStatus(500);
    });
});

// DELETE
router.delete("/:todoID", (req, res) => {
  //var to hold data property
  const sqlData = req.params.todoID;
  //query to SQL
  const queryText = `DELETE FROM "todo" WHERE "id" = $1;`;
  //pool for query and data
  pool
    .query(queryText, [sqlData])
    //promises
    .then((result) => {
      //confirm good data
      res.sendStatus(200);
    })
    //catch errors
    .catch((error) => {
      //confirm and label if error
      console.log("OH NOO!:", error);
      //internal errors
      res.sendStatus(500);
    });
});

//DELETE for resetting table- rinse and repeat, confirmed test on POSTMAN
router.delete("/", (req, res) => {
  //var to hold data property not needed?
  //const sqlData = req.params.todoID;
  //query to SQL
  const queryText = `TRUNCATE TABLE "todo";`;
  //pool for query and data
  pool
    .query(queryText)
    //promises
    .then((result) => {
      //confirm good data
      res.sendStatus(200);
    })
    //catch errors
    .catch((error) => {
      //confirm and label if error
      console.log("OH SHUCKS!!:", error);
      //internal errors
      res.sendStatus(500);
    });
});


module.exports = router;
