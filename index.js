// Your code here
function saturdayFun(activity = "roller-skate"){ 
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(job = "go to the office") { 
    return `This Monday, I will ${job}.`
}

function wrapAdjective(string = "*"){ 
    return function (parm = "special"){ 
        return `You are ${string}${parm}${string}!`
    }
}



let Calculator =  {  
add: function (a, b){
return a + b 
}, 

subtract: function (a, b){ 
    return a - b
}, 

multiply: function (a,b){ 
    return a * b
}, 

divide: function(a , b){ 
   return  a / b 
}
}

function actionApplyer (start, array){ 
    let a = start 
    for(let i =0; i <array.length; i++){ 
        a = array[i](a)
    }
    return a 

}