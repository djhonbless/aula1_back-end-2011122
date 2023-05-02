function calcularIMC(peso, altura){
    var imc = peso /(altura * altura);
    console.log('O sei IMC é igual a: ' + imc );
    if(imc < 18,5){
        console.log("Abaixo do peso normal");
    }
    else if(imc >= 18,5 && imc < 25){
        console.log("Peso normal");
    }
    else if(imc >= 25 && imc < 30){
        console.log("Acima do peso");
    }
    else {
        console.log("Obeso")
    }
}
calcularIMC(80, 2);

/*function revertestring(str){
    var strseparada = str.split(" ")
    for(let i = 0; i < strseparada.length; i++){
        for(let j = strseparada.length - 1; j >= 0; j--){
            reverseStr += splitedstr[i][j];
        }
        reversedStr += " ";
    }
    return reversedStr;
}
var str = "Hoje e Domingo";
revertestring(str);*/

// ex3
function conta_vogais(str){
    var contar = 0;
  
    for (var i = 0; i < str.length; i++){
        var vogal = str[i];
        if(vogal =='a' || vogal == 'e' || vogal == 'i', vogal =='o' || vogal == 'u'){
            contar ++;
        }

    }
    return contar;
}
console.log("vogais: " + conta_vogais("ola mundo"));
//ex4
function conta_vogais_repetir(str, vogal){
    var contar = 0;
    for (var i = 0; i < str.length; i++){
        if(str[i] == vogal){
            contar ++;
        }

    }
    return contar;
}
console.log("conta: " + conta_vogais_repetir("ola", "o"));

// ex5. tem k converter tudo para segundo
function calcularhora(h_entrada, m_entrada, s_entrada, h_saida, m_saida, s_saida){
    var totalsegundosentrada = h_entrada * 3600 + m_entrada * 60 + s_entrada;
    var totalsegundossaida =  h_saida * 3600 + m_saida * 60 + s_saida;
    var total = totalsegundossaida - totalsegundosentrada;

    var remainder_h = total % 3600;
    var hora = (total - remainder_h) / 3600;

    var remainder_m = remainder_h % 60;
    var minuto = (remainder_h - remainder_m) / 60;
    var segundo = remainder_m;

    console.log("O trabalhador trabalhou: " + hora + "h" + minuto + "m"+ segundo + "segundo")
}
calcularhora(8, 0, 0, 9, 2, 5);

function desenhar_rectangulo(caracteres, width, height){
    var linha = " ";

    for(let i = 0; i < width; i++){
        linha += caracteres;
    }
    for(let j = 0; j < height; j++){
        console.log(linha);
    }
}
console.log(desenhar_rectangulo("+", 10, 10));
console.log(desenhar_rectangulo("*", 5, 10));

function desenhartriangulo(caractres, height){
    var linha = " ";
    for(let j = 1; j < height; j++){
        linha += caractres;
        console.log(linha);
    }

}

console.log(desenhartriangulo("*", 7));

function desenharcaixa(size){
    var box = ""
    for(let i = 0; i < size; i++){
        for(j = 0; j <size; j ++ ){
            if(i == 0 || i == -1){
                box += "*";
            }
            else{
                box += " ";
            }
        }
        box += "\n";
    }
    console.log(box)
}
desenharcaixa(10)

var student1 = {nome:"Pedro", grade: 16, number:203334}; // isso é um objecto em javascript
var student2 = {nome:"Ana", grade: 9, number:2334559};
var student3 = {nome:"Tiago", grade: 10, number:2345674};

var studentList = [];
studentList.push(student1);
studentList.push(student2);
studentList.push(student3);

for(var i = 0; i < studentList.length; i++){
    var p = studentList[i];
    var c = p.nome;
   
    console.log("nome: "+ p.nome + "," + p.number + "," + p.grade)
}

function maximo(array){
    var max = array[0].grade;
    var bestStudent = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i].grade > max){
           max = array[i].grade;
           bestStudent = array[i];
        }
    }
    return bestStudent;
}
console.log(maximo(studentList));

function minimo(array){
    var max = array[0].grade;
    var mauStudent = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i].grade < max){
           max = array[i].grade;
           mauStudent = array[i]; 
        }
    }
    return mauStudent;
}
console.log(minimo(studentList));

function mediaGrade(studentList){
    var sum = 0;
    var media = 0;
    for(let i = 0; i < studentList.length; i++){
        sum += studentList[i].grade;
        media = sum / studentList.length;

    }
    return media;
}

console.log(mediaGrade(studentList));
function closeAMedia(studentList){
    var avg = mediaGrade(studentList);
    var min = avg;
    var student = studentList[0];
    for(let i = 0; i < studentList.length; i++){
        var diff = Math.abs(avg - studentList[i].grade);
        if(diff < min){
            min = diff;
            student = studentList[i];
        }
    }
    return student;
}
console.log(closeAMedia(studentList))

function listaNegativa(array){
    var count = 0
}






