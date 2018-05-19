const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller');

const massive = require('massive');
require('dotenv').config();

app.use( bodyParser.json() );
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
})


app.get('/api/products', (req, res) => {
    req.app.get('db').get_products().then(results => {
        res.json(results);
    }).catch(error => {
        res.json({ message: 'A error occured on server. See the server console.' })
    });
});

app.post('/api/products', (req, res) => {
    const data = req.body;
    req.app.get('db').create_product({
        name: data.name,
        price: data.price,
        img: data.img
    }).then(results => {
        res.json(results);
    }).catch(error => {
        res.json({ message: 'Ana error occured on server. See the server console.' })
    });
});


app.delete('/api/products/:id', (req, res) => {
    const { params } = req;
    req.app.get('db').delete_product([ params.id ])
    .then( results => {
        res.json(results);
    })
})

app.put('/api/products/:id', (req, res) => {
    const { params, query } = req;
    const data = req.body;
    req.app.get('db').update_product([ params.id, data.name ]).then( results => {
        res.json(results);
    })
})

const port = 3500;
app.listen( port, () => {
    console.log(`Sever listening on port ${port}.`);
});