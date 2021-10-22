const { readFileSync, writeFileSync } = require('fs');
console.log(readFileSync);
const first = readFileSync('./Content/first.txt', 'utf8');
const second = readFileSync('./Content/second.txt', 'utf8');

console.log(first + '   ' + second);
writeFileSync('./Content/merged.txt', first + '\n' + second);