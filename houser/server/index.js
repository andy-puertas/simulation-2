require('dotenv').config();
const express = require('express');
const bodyParser = require('body-Parser');
const hc = require('./controller.js');
const massive = require('massive');
const ctrl = require('../server/controller')
const port = 3030;
const app = express();


app.use( bodyParser.json() );

app.get('/api/list', ctrl.read)
app.post('/api/house', ctrl.create)

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database is connected");
    app.set("db", dbInstance);
  })
  .catch(err => {
    app.set("db", dbInstance);
    console.log(err);
  });

app.listen(port, () => {
    console.log("Yo this is server " + port);
})
