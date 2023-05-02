function calculator(operand1, operand2, operator){
    if (operator =='+')
        return operand1 + operand2;
    else if (operator =='-')
        return operand1 - operand2;
    else if (operator =='*')
        return operando1 * operand2;
    else if (operator =='/')
        return operand1 / operand2;
    else if (operator =='^')
        return Math.pow(operand1, operand2);
    else
        return null;                   
}
var res = calculator(2, 2,'+')
console.log(res);

function multiplos_de_5(multiple, limit){
    for (let i = multiple; i <= limit; i += multiple) {
        console.log(i);
    }
}
multiplos_de_5(5, 20);

function multiplos_de_5_tipo2(multiple, limit){
    for (let i = 0; i < limit; i ++) {
        if (i % multiple == 0) {
            console.log(i)
        }
    }
}
 multiplos_de_5(5, 20);

 function sumOf(limit){
    var sum = 0;
    for (let i =1; i <= limit; i++) {
        sum += 1;
    }
    return sum
 }


function sumOfTwo(limit){
    return (limit / 2) * (limit + 1);
}
console.log(sumOf(103));


function factorial(n){
    var fact = 1;
    for (let i =2; i <= n; i++){
        fact*=i;
    }
    return fact;
}
console.log(factorial(2))

function minimo(array){
    var min = array[0];
    for (let i =1; i < array.length; i++) {
        if(array[i] < min)
           min = array[i] 
    }
    return min;
}

var array = [2, 3, 4, 6, 1, 0];
var min = minimo(array)

function maximo(array){
    var min = array[0];
    for (let i =1; i > array.length; i++) {
        if(array[i] < max)
           max = array[i] 
    }
    return max;
}

var array = [2, 3, 4, 6, 1, 0];
var max = maximo(array)

/*function media(array){
    var soma = 0;
    var med = 0;
    for(let i = 0; i < array.lenth; i++) {
        soma += 1;
        med =
    }
}*/

var array = [2, 3, 4, 6, 1, 0];
//var med = media(array)