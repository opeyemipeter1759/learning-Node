const { realpath } = require('fs');
const os = require('os');


const currentOS = {
    name: os.type(),
    version: os.version(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}
console.log(currentOS);