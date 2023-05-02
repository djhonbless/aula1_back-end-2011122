//ex1
function massa_corporal(peso,altura){ 
    var imc = peso / (altura *  altura)
    console.log('O seu peso imc é:' + imc);
    if(imc < 18.5){
        console.log("Abaixo do peso normal");
    }
    else if(imc >= 18.5 && imc < 25){
        console.log("no peso normal");
    }
    else if(imc >= 25 && imc < 30){
        console.log("acima do peso normal");
    }
    else{
        console.log("obeso");
    }
}

massa_corporal(71,1.86)

//ex2
/*function reverteString(str){
    var strseparada = str.split("")
    for (let i = 0; i < strseparada.lenght; i++) {
        for (let j = strseparada.lengh[i] - 1; j >= 0; j--){
            reverseStr += splittedStr[i][j];
        }
        reversedStr += " ";
    }
    return reversedStr;
}

var str = ("Hoje e Domingo");
reverteString(str);*/
