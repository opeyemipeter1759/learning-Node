const { readFileSync, writeFileSync } = require('fs');
console.log(readFileSync);
const first = readFileSync('./Content/first.txt', 'utf8');
const second = readFileSync('./Content/second.txt', 'utf8');

console.log(first + '   ' + second);
const third = writeFileSync('./Content/merged.txt', ` here is the merged content of ${first} and ${second}`);

const recent = writeFileSync('./Content/recent.txt', ` here is the merged content of ${first} and ${second} and ${third}`);
console.log(recent);