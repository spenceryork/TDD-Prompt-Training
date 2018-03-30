'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./class.sqlite');

module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all( `SELECT * FROM class`, (err, classes) => {
            if (err) return reject(err);
            resolve(classes);
        });
    });
}
