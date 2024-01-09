const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {

    //query to SQL
    const queryText = `SELECT * FROM "todo";`;
    //pool for query and data
    pool.query(queryText)
    //promises
    .then((result) => {
        //confirm and label data
        console.log('RESULTS:', result)
        //send data
        res.send(result.rows);
    })
    //catch to error
    .catch((error) => {
        //confirm and label if error
        console.log('ERROR:', error)
        //internal errors
        res.sendStatus(500);
    });
});

// POST
router.post('/', (req, res) => {
    //var to hold data property
    let sqlData = req.body;
    //query to SQL
    const queryText = `INSERT INTO "todo" ("task", "description")
    VALUES
    ($1, $2);`;
    //update data
    const queryArgs = [
        sqlData.task,
        sqlData.description,
       
    ]
    console.log('POST results', queryArgs);

    //pool for query and data
    pool.query(queryText, queryArgs)
    //promises
    .then((result) => {
        //confirm good data
        res.sendStatus(201);
    })
    //catch errors
    .catch((error) => {
        //confirm and label if error
        console.log('OH SNAP!:', error);
        //internal errors
        res.sendStatus(500);
    });
});
// PUT

// DELETE

module.exports = router;
