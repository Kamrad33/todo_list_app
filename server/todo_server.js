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
  if (!req.body) return res.sendStatus(400);
  const user_id = req.body.user_id;
  pool.query('SELECT * FROM save where user_id = ?', [user_id], function(err, rows, fields){
    if (err) return console.log(err);
    else{
      console.log('SAVE DATA: ', rows);
      res.send(rows);
    }
  });
});
app.post('/sendTasks', async function(req, res, next) {
  if (!req.body) return res.sendStatus(400);
  const save_name = req.body.save_name;
  const save_date = req.body.save_date;
  const save_json = req.body.save_json;
  const user_id = req.body.user_id;
  pool.query('INSERT INTO save (save_name, save_date, save_json, user_id) values (?,?,?,?)', [save_name, save_date, save_json, user_id], function(err, rows, fields) {
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

  pool.query('SELECT user.id, user.user_name, user.user_password from user where user_name = ? and user_password = ?', [user_name, user_password], function(err, rows, fields) {
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
  });
});
app.post('/editAccount', async function(req, res, next) {
  if (!req.body) return res.sendStatus(400);
  const id = req.body.id;
  const user_name = req.body.user_name;
  const user_password = req.body.user_password;

  pool.query('UPDATE user SET user_name = ?, user_password = ? where id = ?', [user_name, user_password, id], function (err, rows,fields) {
    if (err) return console.log(err);
    else {
      console.log(rows);
      res.send(rows)
    }
  });
});
