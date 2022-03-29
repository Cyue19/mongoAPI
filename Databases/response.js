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

//get deployment numbers
mysql_db.getDeployments = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT DISTINCT painResponseDeployment FROM Pain_Responses", (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(results);
            }
        })
    })
}

//get all pain response data from a specific deployment
mysql_db.getPainResponses = (deployment) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM Pain_Responses WHERE painResponseDeployment = ? ORDER BY time DESC", [deployment], (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};

//get question1 pain answer counts from a specific deployment
mysql_db.getPainCounts = (deployment) => {
    return new Promise((resolve, reject) => {
        //below query counts the distinct values in question1 
        connection.query("SELECT questionOneAnswer, count(*) AS count FROM Pain_Responses WHERE painResponseDeployment = ? GROUP BY questionOneAnswer;", [deployment], (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};

//get all end of day responses data from besi-c deployment
mysql_db.getEndOfDayResponses = (deployment) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM End_Of_Day_Responses WHERE eodrDeployment = ?", [deployment], (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};

//get all follow up data from besi-c deployment
mysql_db.getFollowUpResponses = (deployment) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM Follow_Up_Responses WHERE furDeployment = ?", [deployment], (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};


//get the last follow up data from besi-c deployment
mysql_db.getFollowUpRecent = (deployment) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM Follow_Up_Responses WHERE furDeployment = ? ORDER BY Follow_Up_Responses.time DESC", [deployment], (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};

//get the last follow up data from besi-c deployment
mysql_db.getEndOfDayRecent = (deployment) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM End_Of_Day_Responses WHERE eodrDeployment = ? ORDER BY End_Of_Day_Responses.time DESC", [deployment], (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};

//get question1 from follow up data from besi-c deployment
mysql_db.getFollowUpQ1 = (deployment) => {
    return new Promise((resolve, reject) => {
        //below query counts the distinct values in question1 
        connection.query("SELECT question1, count(*) as count FROM `Besi-C`.Follow_Up_Responses WHERE furDeployment = ? GROUP BY question1;", [deployment], (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve (results);
            }
        })
        //connection.end();
    })
};

//get question1 from end-of-day data from besi-c deployment
mysql_db.getEndOfDayQ1 = (deployment) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT question1, count(*) as count FROM `Besi-C`.End_Of_Day_Responses WHERE eodrDeployment = ? GROUP BY question1", [deployment], (err, results) => {
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