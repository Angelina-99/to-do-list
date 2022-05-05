const express = require("express");
const config = require("./config");
const routes = require("./routes");
const pg = require('pg');
const req = require("express/lib/request");
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;
const app = express();


async function setup() {
    dotenv.config();
    const db = new pg.Client(config.db);
    db.connect(err => {
        if (err) throw err;
        else {
            console.log('Database connected');
        }
    });

    const query = `
        CREATE TABLE IF NOT EXISTS tasks (
            id SERIAL,
            name VARCHAR(50),
            PRIMARY KEY (id)
        )
    `;
    db.query(query).then(() => {
        console.log('Table tasks is exists');
    }).catch(err => {
        if (err) throw err;
    });

    req.db = db;

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json({ extended: true }))
    app.use(routes);
}



setup().then(() => {
    app.listen(port);
})