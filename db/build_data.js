'use strict';

const { createWriteStream } = require('fs');
const { generateClasses } = require("../data/class");

const { generateEmployees } = require("../data/employees");

// class data
let classes = generateClasses();
let classStream = createWriteStream(`./json/class.json`);
empStream.write(JSON.stringify(classes));