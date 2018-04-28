//load file module
var fs = require('fs')

//Path to the File to Read
var strPathToFile = process.argv[2]

//Buffer
var bufFileContents = fs.readFileSync(strPathToFile)

//String
var strfileContents = bufFileContents.toString()

//Array of strings
var strAfileContents = strfileContents.split('\n')

//Adjust for test
console.log(strAfileContents.length-1)
