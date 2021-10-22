const path = require('path')

//  console.log(path.delimiter)

//  let result = path.dirname('/public_html/home/index.html', '.html');
//  console.log(result);

//  let pathToFile = path.format({
//      dir: 'public_html/home/js',
//      base: 'app.js'
//  });

//  console.log(pathToFile);
let pathToDir = path.join('/home', 'js', 'dist', 'app.js');
console.log(pathToDir);
let pathObj = path.parse('/nodejs/html/js/app.js');
console.log(pathObj);