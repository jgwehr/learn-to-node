//load file module
var fs = require('fs');

var bufFileContents = fs.readFile(process.argv[2], 'utf8', function(err, data){
  if (err) throw err;

  var lines = data.split('\n').length-1;
  console.log(lines);
});
