var pessoa = {nome:"Joana", age:21, gender:'f'};
var pessoaJSON = JSON.stringify(pessoa);
console.log(pessoa);
console.log(pessoaJSON);
var str = '{"nome":"Joana","age":21,"gender":"f"}';
var pessoaobj = JSON.parse(str);
pessoaobj.age

var Person = require('./person.js');
var person1 = new Person('James', 'Blond',);
var person2 = new Person ('Ana', 'Alves');
var person3 = new Person ('Carlos', 'Fonseca');

person1.age = 20;
console.log(person1.fullName());
console.log(person1.greet());
console.log(person1.__proto__);
console.log(person2.__proto__);
console.log(person1.__proto__ == person2.__proto__);

var Emitter = require('./Emiter');
var emiter = new Emitter();
emiter.on("Login", function(){
    console.log("Login 1");
})

emiter.on("Login", function(){
    console.log("Login 2");
})
emiter.emit("Login");

var config = require('./config');
emiter.on(config.events.LOGIN, function(){
    console.log("Login 1");
});
var config = require('./config');
emiter.on(config.events.LOGIN, function(){
    console.log("Login 2");
});
emiter.emit(config.events.LOGIN);



