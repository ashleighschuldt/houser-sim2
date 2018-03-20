const massive = require('massive');

require('dotenv').config();

massive(process.env.CONNECTION_STRING)
    .then(db => db.setup.createProperty())
    .then(result => console.log(result))
    .catch(err => console.error(err));