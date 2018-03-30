"use strict";

const faker = require('faker');
const {dateGen} = require('./dateGenerator');

module.exports.generateClassList = () => {
    let classes = [];
    const randomNumber = () => Math.floor(Math.random() * 300) + 10;

    for (let i = 0; i < 50; i++) {
        let noOfSeats = randomNumber();
        let instructorName = faker.name.findName();
        let startDate = dateGen('2017-01-01', '2019-12-31');
        let endDate = dateGen('2017-01-01', '2019-12-31');
        let courseCategory = faker.commerce.department();

        classes.push({
            noOfSeats,
            instructorName,
            startDate,
            endDate,
            courseCategory,
        });
    }
    return classes;
}