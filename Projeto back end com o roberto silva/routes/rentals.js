var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'projeto1'
});

connection.connect();


// PARTE A ---------------------------------------------------------------------------------------------------------
// localhost:3000/rentals
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM rentals", (err, results, fields) => {
    if (err) {
      console.error(err);
      res.status(500).json({ mensagem: 'Ocorreu um erro ao obter os aluguéis.' });
    } else {
      res.send(results);
    }
  });
});

// localhost:3000/rentals
router.post('/', function(req, res, next) {
  var person=req.body;
  connection.query("INSERT INTO rentals SET ? ", [person],(err,results,fields)=>{
      res.send(results);
  })
});










//PARTE B ----------------------------------------------------------------------------------------------------------------



/* GET users listing. */
router.get('/rentals/:id', function(req, res, next) {
    const id = req.params.id;
    connection.query("SELECT * FROM rentals WHERE id = ?", [id], (err, results, fields) => {
      if (err) {
        console.error(err);
        res.status(500).json({ mensagem: 'Ocorreu um erro ao obter o aluguel.' });
      } else if (results.length == 0) {
        res.status(404).json({ mensagem: 'Aluguel não encontrado.' });
      } else {
        res.status(200).json(results[0]);
      }
    });
  });




















module.exports = router;
