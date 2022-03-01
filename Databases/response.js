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
        // connection.end();
    })
};

//get all end of day responses data from besi-c
mysql_db.getEndOfDayResponses = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM End_Of_Day_Responses", (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};

//get all follow up data from besi-c
mysql_db.getFollowUpResponses = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM Follow_Up_Responses", (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};


//get the last follow up data from besi-c
mysql_db.getFollowUpRecent = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM Follow_Up_Responses ORDER BY Follow_Up_Responses.time DESC", (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};

//get the last follow up data from besi-c
mysql_db.getEndOfDayRecent = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM End_Of_Day_Responses ORDER BY End_Of_Day_Responses.time DESC", (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};

//get the last follow up data from besi-c
mysql_db.getFollowUpQ1 = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT question1 FROM End_Of_Day_Responses", (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};

module.exports = mysql_db;