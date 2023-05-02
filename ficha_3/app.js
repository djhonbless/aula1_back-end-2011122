var myLogModule = require('./log.js'); // chamar ficheiro
myLogModule.info('Node.js started');

var person = require('./Person.js'); // require é para chamar o ficheiro que está dentro do parênteses
var person1 = new person ('James', 'Blond');
var person2 = new person ('Ana', 'Alves');
var person3 = new person ('Carlos', 'Fonseca');


console.log(person1.fullName());
console.log(person2.fullName());
console.log(person3.fullName());

var arrayUtils = require('./ArrayUtil');
var array = [3, 2, 4, 6, 8];
var array1 = [0, 5, 7];
var empty = arrayUtils.isEmpty(array);
console.log(empty);

console.log(arrayUtils.max(array));
console.log(arrayUtils.min(array));
console.log(arrayUtils.media(array));
console.log(arrayUtils.indexOf(array, 4));
console.log(arrayUtils.Swop(array, 0, 2));
console.log(arrayUtils.contains(array, 5));
console.log(arrayUtils.concatenate(array, array1));


function person(firstName){
    this.firstName = firstName;
}
person.prototype.greet = function(){
    return "hello" + this.firstName;
}
console.log(p.greet());
var p = new person("clara");
var x = 0;