const sqlite3 = require('sqlite3').verbose();

// connect to database
const db = new sqlite3.Database('./db/employee.db', err => {
    if(err){
        return console.error(err.message);
    }
    console.log('connected to database');
})

module.exports = db;