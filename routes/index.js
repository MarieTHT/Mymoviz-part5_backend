var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const { response } = require('../app');
var env = require('dotenv').config();

// const API_KEY = "59af57f94882c4a54dd15aa7e5b2f2d2";
const API_KEY = process.env.OWM_API_KEY;

const API_PATH = 'https://api.themoviedb.org/3/discover/movie';

router.get('/movies', (req, res) =>
{
    fetch(`${API_PATH}?api_key=${API_KEY}`)
        .then(response=> response.json())
        .then(apiData => {
            //console.log(apiData);
            res.json(apiData);
        });


});

module.exports = router;
