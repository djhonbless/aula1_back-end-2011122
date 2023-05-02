var array = [];

//array.push(10); adicionar coisas no array
array.push(function(valor){
    console.log("Hello Word" + valor);
});
array.push(function(valor){
    console.log("Hello Word " + valor);
});
array.push(function(valor){
    console.log("Hello Word " + valor);
});

for(let i = 0; i < array.length; i++){
    //var element = array[i];
    //element()
    array[i](i);
}
var index = 1;
array.forEach(element => { // para fazer o ciclo no array
    element (index);
    index ++;
});

