//load file module
var fs = require('fs')

var bufFileContents = fs.readFileSync(process.argv[2])

//count of lines
var lines = bufFileContents.toString().split('\n').length-1


//Adjust for test
console.log(lines)
