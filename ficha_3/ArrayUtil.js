module.exports = {
    isEmpty : function(array){
       // return array.length == 0; outra forma de verificar se o array esta vazio
        if(array.length == 0){
            return true;
        }
        else {
            return false;
        }
    },
    max: function(array){
        var max = array[0];
        for (let i =1; i < array.length; i++) {
            if(array[i] > max)
                max = array[i] 
              
        }
        return max;

    },
    min: function(array){
        var min = array[0];
        for (let i =1; i < array.length; i++) {
            if(array[i] < min)
                min = array[i]
             
        }
        return min;

    },
    media: function(array){
        var sum = 0;
        var media = 0;
        for(let i = 0; i < array.length; i++){
            sum += array[i];
            media = sum / array.length;
    
        }
        return media;
    }, 
    indexOf: function(array, valor){
        var index = -1;
        for(let i = 0; i < array.length; i++){
            if(array[i] == valor){
                return i;
            }
           
        }
        return -1;
    },
    Swop: function(array, index1, index2){

        var tmp = array[index1];
        array[index1] = array[index2];
        array[index2] = tmp;
        return array; 
    },
    contains: function(array, valor){
        return this.indexOf(array, valor) != -1;
    },
    concatenate: function(array, array1){
        for(let i = 0; i < array1.length; i++){
            array.push(array1[i]);
        }
        return array;

    }
};