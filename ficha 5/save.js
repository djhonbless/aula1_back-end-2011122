// import express module a framework
const express = require('express')
const fs = require('fs') // importar a função fs de leitura
const app = express() // instância da aplicação express
const port = 3000

// converte o body para json
app.use(express.json());

function readFile(path){ // esta função lê o ficheiro e converte em json
    var content = fs.readFileSync(path);
    return JSON.parse(content); // parse é para converter o ficheiro em json para objeto
}
var content = readFile('./person.json'); // ipmportar o ficheiro person.json
console.log(content);

function writeFile(path, data){ // funcao para atualizar o ficheiro modificado.
  fs.writeFileSync(path, data);
   

}
writeFile('./person.json');


app.get('/', (req, res) => {  // este ficheiro é executado quando for feito uma pesquisa para o caminho ideal
  res.send('Hello World!')
});

app.get('/users', (req, res) => { // o get é um en-point k devolva uma informação
    res.send(content)
  })

app.post('/users', (req, res) => { // esta funçao do post vai devolver o ficheiro k estiver no Body
    if(!Object.keys(body).length){ // se o body está vazio
      res.status(400).send("DETAILS NOT FOUND"); // envia esse erro

    }
    else{
      var  person = req.body; // criamos uma 
      var size = Object.keys(content).length; // esta é para saber a quantidade das chaves
      //var id = 5; // variavel
      var id = size + 1;
      person.id = id; // propriedade
      content["person" + id] = person; // esta linh d codig adiciona uma propriedade de um objecto
      writeFile('./person.json', JSON.stringify(content));
  
      //var keys = Object.keys(content);
      
      //res.send(req.body.firstname)
  
      res.send("ID: " + id);

    }

}) 

app.get('/users/:id', (req, res) => { // este é um get com id, para manipular os dados
  var id = req.params.id;
  var person = content["person" + id];
  if(person == undefined){
    res.status(404).send("ID NOT FOUND")
    
  }
  else{
    res.send(person);

  }
  //res.send(person);

  
});

app.delete('/users/:id', (req, res) => { 
  var id = req.params.id; // esta linha vai pegar o id incdicado como parametro
  var person = content["person" + id];
  if(person == undefined){  // este vai testar se o person existe ou n
    res.send("ID not found")
  }
  else{
    delete content["person" + id]; //esta vai apagar o parametro indicado 
    writeFile('./person.json', JSON.stringify(content));
    res.send( "ID DELECTED" + id);

  }

  
});

app.put('/users/:id', (req, res) => { 
  var id = req.params.id;
  var person = content["person" + id];
  if(person == undefined){ 
    res.send("ID not found")
  }
  else{
    //var details = rep.body;
    //person.firstname = details.firstname; 
    content["person" + id] = req.body;
    content["person" + id].id = id;
    //content["person" + id].age = req.body.age; // esta linha é para mudar o ano, de uma outra forma
    writeFile('./person.json', JSON.stringify(content));
    res.send(content["person" + id]);
  }
  console.log("PUT"); 
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

