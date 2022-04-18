const express = require('express');
const bodyParser = require('body-parser');
const config = require('./setting/config');
const db = require('./setting/db');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const test = require('./api/test');
app.use(test);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.URI, function(err, db) {
    try{
        console.log("Mongo Connected!");
        db.close();
    }catch(err){
        console.log(err);
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'YeoJ!' });
});

db.sql.connect(function(err) {
    try{
        console.log("Mysql Connected!");
    }catch(err){
        console.log(err);
    }
});

app.listen(config.app.port, () => {
    console.log('Node App is running on port 9000');
    // console.log(db.URI)
})

module.exports = app;