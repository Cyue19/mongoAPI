const mysql = require("mysql");
require("dotenv").config();

//connect to mysql database
const connection = mysql.createConnection({
    connectionLimit: 10,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: "Besi-C",
    host: process.env.MYSQL_HOST,
    port: "3306"
});

//check connection
connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MySQL Server!');
    }
});

let mysql_db = {};

//get all pain response data from besi-c
mysql_db.getPainResponses = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM Pain_Responses", (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
    })
};

connection.release();

module.exports = mysql_db;