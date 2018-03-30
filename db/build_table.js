'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('class.sqlite');
const { readFileSync } = require('fs');
const faker = require('faker');

const classData = JSON.parse(readFileSync("./json/class.json"));

db.run(`DROP TABLE IF EXISTS class`);
db.run(
    `CREATE TABLE IF NOT EXISTS class (
        class_id INTEGER PRIMARY KEY,
        no_of_seats INTERGER,
        instructor_name TEXT,
        start_date TEXT,
        end_date TEXT,
        course_category TEXT
    )`,
        () => {
            classData.forEach(({ noOfSeats, instructorName, startDate, endDate, courseCategory }) => {
                db.run(`INSERT INTO class VALUES (
                    ${null},
                    ${noOfSeats},
                    "${instructorName}",
                    "${startDate}",
                    "${endDate}",
                    "${courseCategory}"
                )`);
            });
        }
    );
