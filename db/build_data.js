'use strict';

const { createWriteStream } = require('fs');
const { generateClassList } = require("../data/class");


// class data
let classes = generateClassList();
let classStream = createWriteStream(`./json/class.json`);
classStream.write(JSON.stringify(classes));