const { response } = require('express');
const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')['development'])

app.get('/', (req, res) => {
    res.send('Application up and running.')
});

app.get('/pets', (req, res) => {
    knex('pet')
        .select('*')
        .then(data => {
            var petNames = data.map(pet => pet.name)
            response.json(petNames);
        });
});
app.listen(port, () => {
    console.log('Your Knex and Express application are running successfully')
})