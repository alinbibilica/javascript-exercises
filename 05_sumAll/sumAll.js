const sumAll = function(first, second) {

   sum = 0;

   if(first>second){
    let temp = null;
    temp  = first;
    first = second;
    second = temp;
    }

    if(first<0 || second<0) return 'ERROR';
    if(typeof first !== 'number' || typeof second !== 'number') return 'ERROR';
   
    if(Number.isInteger(first) && Number.isInteger(second)){
         for(let i = first; i<=second; i++){
             sum+=i;}
                    } else return "ERROR";

   return sum;
};

// Do not edit below this line
module.exports = sumAll;
