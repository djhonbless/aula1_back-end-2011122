function Person(firstName, lastName,){ // é uma propriedade por receber um objeto
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.fullName = function(){
        return this.firstName + " " + this.lastName;

    }
}
Person.prototype.greet = function(){ // função greep
    return "Hello" + " " + this.fullName() + "." + "Tem "+ this.age + " anos.";

}
Person.prototype.age;



module.exports = Person;



