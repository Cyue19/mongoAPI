const mysql = require("mysql");

const connection = mysql.createConnection({
    connectionLimit: 10,
    user: "read_Only",
    password: "8mUT#eYh<4@2VQLs",
    database: "Besi-C",
    host: "production.clvlkjysr6yt.us-east-1.rds.amazonaws.com",
    port: "3306"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MySQL Server!');
    }
});

let mysql_db = {};

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

module.exports = mysql_db;