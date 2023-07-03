///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////Read File///////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// The fs.readFile() method is used to read files on your computer.
// Assume we have the following HTML file (located in the same folder as Node.js):
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8180);

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////Create File/////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// The File System module has methods for creating new files:
//     fs.appendFile()
//     fs.open()
//     fs.writeFile()
// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", 
// the specified file is opened for writing. If the file does not exist, an empty file is created:
var fs = require('fs');
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist,
//  a new file, containing the specified content, will be created:
var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////Update File/////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// The File System module has methods for updating files:
//     fs.appendFile()
//     fs.writeFile()
// The fs.appendFile() method appends the specified content at the end of the specified file:

var fs = require('fs'); 
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
}); 


var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'This is my text2', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////Delete File/////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
var fs = require('fs');
fs.unlink('mynewfile1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////Rename File/////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
var fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});