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
// need to have an id passed to grab the movies desciption and display on the movie details page. 
router.get('/details/:id', (req, res) => {
    
    const sqlText = `SELECT "movies"."title",genres.name, "movies"."description", "movies"."id"
    FROM "junction_table"
    JOIN movies ON movies.id = junction_table.movie_id
    JOIN genres ON genres.id = junction_table.genre_id
    WHERE movies.id = $1;`;
    pool.query (sqlText, [req.params.id])
    .then( (response) =>{
        console.log('response.rows', response.rows[0])
        res.send(response.rows[0]);
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

// router.put('/details')
router.put('/details/:id', (req, res) =>{
    let update = req.params.id;
    let detailId = req.body.id;
    const sqlText = `UPDATE "movies" 
    SET 
         "movies"."description" = $1
         "movies"."title" = $2
    WHERE movies.id= $3;`;
    const values = [update, detailId]
    pool.query(sqlText, values).then( (response) => {
            res.sendStatus(200);
        })
        .catch( (error) => {
            console.log(`Error updating DETAILS`, error);
            res.sendStatus(500);
})
})




module.exports = router;