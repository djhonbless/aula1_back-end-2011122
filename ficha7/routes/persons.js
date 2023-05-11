var express = require('express'); // esta parte é para criar um servidor no mysql
var mysql = require('mysql');
var router = express.Router();

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'backend7'
});

connection.connect();

/* GET users listing. este get é para apresentar os valores da base de dados */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM persons",(err,results,fields)=>{
   
      res.send(results);
  })
});

// este segundo get é para apresentanr os valores de um id na data  base
router.get('/:id', function(req, res, next) { 
  var id = req.params.id;
  connection.query("SELECT * FROM persons Where id = ?", id, (err,results,fields)=>{
   
      res.send(results);
  })
});

router.delete('/:id', function(req, res, next) { 
  var id = req.params.id;
  connection.query("DELETE  FROM persons Where id = ?", id, (err,results,fields)=>{
   
      res.send(results);
  })
});

router.post('/', function(req, res, next) { 
  var person = req.body;
  connection.query("INSERT INTO persons SET ?", [person], (err,results,fields)=>{
   
      res.send(results);
  })
});

router.put('/:id', function(req, res, next) { 
  var person = req.body;
  var id = req.params.id;
  connection.query("UPDATE persons SET ? WHERE id = ?", [person, id], (err,results,fields)=>{ // esta linh é a parte de base de dados que vai alterar os valores usando os parametros
    if(err) {
      res.status(500),end("Error while performing query."); // o primeiro if é para avaliar se tem algum erro
    }                                                        // o segundo é para verificar se houve alguma alteração
    else if (results.affectedRows == 0){
      res.status(404).end("Id not foud");
    }
    else{
      res.send(results);

    }
    
   
     
    
  })
});

module.exports = router;
