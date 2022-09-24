const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();

const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  database: 'todo_app_db',
  password: 'root'
});

pool.getConnection(function(error) {
  if (error) console.log(error);
  else console.log('connected to DB');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=UTF-8');
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(cors());

app.set('view engine', 'hbs');

app.listen(1348, function(error){
  if (error) console.log(error);
  else console.log('Server is waiting connection...');
});

app.post('/loadTasks', async function(req, res, next){
  pool.query('SELECT * FROM save', function(err, rows, fields){
    if (err) return console.log(err);
    else{
      console.log('SAVE DATA: ', rows);
      res.send(rows);
    }
  });
});
app.post('/sendTasks', async function(req, res, next) {
  if (!req.body) return res.sendStatus(400);
  const data = req.body.data;
  pool.query('INSERT INTO save (data) values (?)', data, function(err, rows, fields) {
    if (err) return console.log(err);
    else {
      console.log(rows);
      res.send(rows);
    }});
});
app.post('/userLogin', async function(req, res, next) {
  if (!req.body) return res.sendStatus(400);
  const user_name = req.body.user_name;
  const user_password = req.body.user_password;

  pool.query('SELECT user.user_name, user.user_password from user where user_name = ? and user_password = ?', [user_name, user_password], function(err, rows, fields) {
    if (err) return console.log(err);
    else {
      console.log(rows);
      res.send(rows);
    }
  });
});

app.post('/checkUser', async function (req, res, next) {
  if (!req.body) return res.sendStatus(400);
  const user_name = req.body.user_name;
  pool.query('select * from user where user_name = ?', [user_name], function (err, rows, fields) {
    if (err) return console.log(err);
    else {
        console.log(rows);
        res.send(rows);
    }
  });
});
app.post('/userRegister', async function(req, res, next) {
  if (!req.body) return res.sendStatus(400);
  const user_name = req.body.user_name;
  const user_password = req.body.user_password;

  pool.query('INSERT into user (user_name, user_password) values (?,?)', [user_name, user_password], function (err, rows, fields) {
    if (err) return console.log(err);
    else {
      console.log(rows);
      res.send(rows);
    }
  })
})
