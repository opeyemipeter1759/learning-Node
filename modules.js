const persons = require('./names.js')
const sayHi = require('./utils')
    // const { john, peter } = names;
console.log(persons);
sayHi(persons.john)
sayHi(persons.peter)