//app.js

console.log('hello?')


const mysql = require('mysql');
console.log(mysql);
const connection = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9185922",
  password: "cbZhQ4XAFX",
  database: 'sql9185922'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});