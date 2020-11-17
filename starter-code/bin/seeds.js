const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity.model");

mongoose.connect('mongodb://localhost/lab-mongoose-movies');

const celebrities = [
    {
        name: 'Tony Stark',
        occupation: 'Superhero',
        catchPhrase: "I am IronMan"
    },
    {
        name: 'Black Panther',
        occupation: 'King',
        catchPhrase: "Wakanda forever"
    },
    {
        name: 'Hulk',
        occupation: 'Superhero',
        catchPhrase: "Raaaaaawr"
    }
];

Celebrity.create(celebrities)
    .then(()=>{
        console.log(`Created ${celebrities.length} celebrities.`);
        mongoose.connection.close(()=>{
            console.log('Mongoose connection closed.');
        });
    })
    .catch((err)=>console.log(err));



    