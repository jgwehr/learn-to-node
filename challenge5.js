//load module
var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = '.'+process.argv[3];


fs.readdir(directory,function(err,files){
  if (err) return console.error(err);
  // console.log("Total Number of Files: " + files.length);

  //Does the filename contain our extension?
  files.forEach(function(file){
    // console.log(file + " | " + path.extname(file));
    if (path.extname(file) === extension) {
      console.log(file);
    }

  });
})
