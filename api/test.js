const express = require('express');
const bodyParser = require('body-parser');
const db = require('../setting/db');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', async (req, res) => {
    try{
        db.sql.query("select * from data_tax",(err,results,fields)=>{
            if(err){
                console.log(error);
                return res.status(400).send();
            }
            res.status(200).json(results);
    })
    }catch(err){
        console.log(err);
         return res.status(500).send();
    }
});

module.exports = app;