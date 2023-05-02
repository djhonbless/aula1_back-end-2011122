function calculator(operand1, operand2, operator){
    if(operator =='+')
       return operand1 + operand2;
    else if (operator == '-')
       return operand1 - operand2 ;
    else if (operator == '/' )
       return operand1 / operand2;
    else if (operator == '*')
      return operand1 * operand2   
    else if (operator == '^')
       return Math,pow(operand1, operand2)
    else            
       return Null
}
var res = calculator(2, 2, '+')
console.log(res);

function multiple(multiple, limit){
   for(let i = multiple; i <= limit; i += multiple){
      console.log(i);
   }
}
multiple(5, 20);

function sumOf(limit){
   var sum = 0;
   for(let i = 1;  i <= limit; i++){
      sum += 1
   }
   return sum
}
console.log(sumOf(103))

function sumOfTwo(limit){
   return (limit / 2) * (limit +1)

}
console.log(sumOfTwo(103));

function factorial(n){
   var fact = 1;
   for(let i = 2; i <= n; i++){
      fact *= i
   }
   return fact
}
console.log(factorial(2));

function minimo(array){
   var mim = array[0];
   for(let i = 1; i < array.length; i++){
      if (array[i] < min){
         mim = array[i]
      }
         
   }

   return mim;
}
var array = [2, 1, 0, 6, 7, 3];
var mim = minimo(array);
