const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');

require('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING)
    .then((db) => {
        console.log('db is running');
        app.set('db', db);
    })
    .catch( err => {
        console.error(err);
    })

app.use(cors());
app.use(bodyParser.json());

app.use(session({
    name: 'houser',
    secret: process.env.SESSION_SECRET,
    cookie: {
        expires: 5 * 24 * 60 * 60 *1000
    }
}));    

app.post(`/api/auth/login`, (req, res) => {
    const db = app.get('db');
    const {email, password} = req.body;

    db.user_table.findOne({email, password})
        .then( user => {
            if (!user){
                return res.status(401).send({success: false, message: 'Login failed'})
            }
            req.session.user = user.id;
            res.status(200).send({success: true, message: `Login Successful!`})
        })
})

app.post('/api/auth/register', (req, res) => {
    const db = app.get('db');
    const { email, password } = req.body;
    
db.user_table.insert({ email, password })
        .then(user => {
            req.session.user = user.id;
            console.log(req.session.user)
            res.status(200).send({ success: true, message: 'logged in successfully' });
        })
        .catch(handleDbError(res));
});

app.get(`/api/properties`, (req, res) => {
    const db = app.get('db');
    db.property.getProperty({ userId: req.session.user })
        .then(properties => {
            res.status(200).send(properties);
        })
        .catch(handleDbError(res));
})

app.delete(`/api/properties/:id`, (req, res) => {
    const db = app.get('db');
    db.property.deleteProperty({ propertyId: req.params.id })
        .then(properties => {
            return db.property.getProperty({ userId: req.session.user })
        })
        .then(properties => {
            res.status(200).send(properties);
        })
        .catch(handleDbError(res));
})

app.post(`/api/properties`, (req, res) => {
    const db = app.get('db');
   db.property.createProperty({
       user_id: req.session.user,
       name: req.body.name,
       description: req.body.description,
       address: req.body.address,
       city: req.body.city,
       state: req.body.state,
       zip: req.body.zip,
       image: req.body.image,
       loan_amount: req.body.loanAmount,
       monthly_mortgage: req.body.monthlyMortgage,
       desired_rent: req.body.desiredRent
   })
   .then(properties => {
    return db.property.getProperty({ userId: req.session.user })
    })
   .then(properties => {
       res.status(200).send(properties);
    }) 
   .catch(handleDbError(res));
})

app.get(`/api/filter`, (req, res) => {
    const db = app.get('db');
    db.property.filter({ userId: req.session.user, filter: req.body.filter })
        .then(filter => {
            res.status(200).send(filter);
        })
        .catch(handleDbError(res));
})




const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log('this port is awesome', port)
});


function handleDbError(res) {
    return (err) => {
        console.warn('hit a snag');
        console.error(err);
        
        if (err.code == 'ECONNRESET') {
            return res.status(500).send({ message: 'something died again' });
        }
        if (err.code == '22P02') {
            res.status(422).send({ message: 'The request had incorrect or missing properties: ' + err.message });
        }
        res.status(500).send({ message: 'Internal Server Error' })
    };
}
