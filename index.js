function saturdayFun(activity='roller-skate'){

    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*'){
    return (string='special')=>{
        return `You are ${flair}${string}${flair}!`
    }
}

let Calculator = {

    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return (a*b);
    },
    divide: (a,b)=>{
        return (a/b);
    }
}


function actionApplyer(integer, array){

    let copyInt = integer;
    for(let i=0; i<array.length; i++){ copyInt = array[i](copyInt)}
    return copyInt;
}