var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin@12345"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
if (err) throw err;
console.log("Connected!");
conn.query("CREATE DATABASE mydb", function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
