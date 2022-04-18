
// const mongoose = require('mongoose');
const config = require('./config');
const mysql = require('mysql');
const { mongo:{ MONGO_USERNAME, MONGO_PASSWORD, MONGO_SERVER, MONGO_PORT, MONGO_DATABASE_NAME } } = config;
const URI = `mongodb://${MONGO_USERNAME}:${encodeURIComponent(MONGO_PASSWORD)}@${MONGO_SERVER}:${MONGO_PORT}/${MONGO_DATABASE_NAME}`;
// mongoose.connect(connectionString);

const { mysql:{ host, port, database, user, password} } = config;

const sql = mysql.createConnection({
    host: host,
    port: port,
    database: database,
    user: user,
    password: password,
})

module.exports = {
    sql,
    URI
};
