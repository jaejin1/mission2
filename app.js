var express = require("express");
var app = express();

var http = require("http");
var path = require("path");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'jaejin',
    password : '1111',
    database: 'node'
});

connection.connect();

connection.query('select * from notice', function(err, rows, fields){
    if(!err)
        console.log('The solution is: ' , rows);
    else
        console.log('error while perfoming query.',err);
});

connection.end();

app.get('/', function(req,res){
    res.send("Hello world.");    
})
app.listen(process.env.PORT, function(){
    console.log('Connected!!!!');
})