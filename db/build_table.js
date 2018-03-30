'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');
const { readFileSync } = require('fs');
const faker = require('faker');

db.run(`DROP TABLE IF EXISTS class`);
db.run(
    `CREATE TABLE IF NOT EXISTS class (
        class_id INTERGER PRIMARY KEY,
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
