const { response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 8081;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development'])

app.get('/', (req, res) => {
    res.send('Application up and running.')
});

app.get('/pets', (req, res) => {
    knex
        .select('*')
        .from('pet')
        .then(data => {
            var petNames = data.map(pet => pet.name)
            res.json(petNames);
        });
});
app.listen(port, () => {
    console.log('Your Knex and Express application are running successfully')
})