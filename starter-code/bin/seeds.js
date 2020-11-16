const Celebrity = require("../models/Celebrity.model");

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
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>console.log(err));