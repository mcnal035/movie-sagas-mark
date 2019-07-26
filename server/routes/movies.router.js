const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM movies;`;
    pool.query (sqlText)
    .then( (response) =>{
        res.send(response.rows);
    })
    .catch( (error) => {
        console.log('error getting characters', error);
        res.sendStatus(500);
    })
})


router.get('/genres', (req, res) => {
    const sqlText = `SELECT * FROM genres;`;
    pool.query (sqlText)
    .then( (response) =>{
        res.send(response.rows);
    })
    .catch( (error) => {
        console.log('error getting characters', error);
        res.sendStatus(500);
    })
})



module.exports = router;