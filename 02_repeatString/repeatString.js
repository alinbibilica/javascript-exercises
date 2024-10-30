

const repeatString = function(word , times) {
     
    if(times<0){ return "ERROR"; }
    let userInput = "";
    for(let i =0; i<times; i++){
        userInput+=word;
        
    }
    return userInput;
};


 


// Do not edit below this line
module.exports = repeatString;
