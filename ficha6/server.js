// import express module a framework.. estas 4 instâncias tbm
const express = require('express')  
const fs = require('fs') // importar a função fs de leitura
const app = express() // instância da aplicação express
const port = 3000

app.use(express.json());
app.use(function(req, res){ // esta função middleware vai correr em tds as funções ou app
    console.log("MIDDLEWERE")
})

fs.appendFileSync("log.txt", "Server Started \n") // este linh é para adicionar algo no ficheiro
function writelog(req){
    var log = req.url + ", " + req.method + ", " + new Date().toString() + "\n"; //nesta variavel de string recebe o caminho o methodo e a data atual 
    fs.appendFileSync("log.txt", log);

}

app.get('/', function(req, res){
    writelog(req);
    const body = 'hello word';
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Length': 'text/plain'

    });
    res.end(body);

});

app.get('/html', function(req, res){
    const body = '<h2> My First Heading</h2><p>My paragrafy.</p>';
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Length': 'text/html'

    });
    res.end(body);
    

});

app.get('/html1', function(req, res){
    const body = fs.readFileSync("index.html");
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Length': 'text/html'

    });
    res.end(body);
    

});

app.get('/html1/:name', function(req, res){
    var date = new Date();
    var name = req.params.name;
    var body = fs.readFileSync("index.html", "utf-8"); // esta linha vai converter os dados binarios
    body = body.replace("{name}", name); // esta vai sibstituir
    body = body.replace("{date}", date.toDateString());
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Length': 'text/html'

    });
    res.end(body);
    

});
app.listen(port, () => {   // é necessário para por o sevidor a correr
    console.log(`Example app listening on port ${port}`)
  })