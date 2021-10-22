const { writeFileSync } = require('fs');
const { first, second } = require("./index");

const third = writeFileSync('./Content/merged.txt', ` here is the merged content of ${first} and ${second}`);;