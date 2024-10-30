const leapYears = function(year) {

    const yearBy4 = year % 4 === 0;
    const yearBy100 = year % 100 === 0;
    const yearBy400 = year % 400 === 0;

    if( yearBy4 && (!yearBy100 || yearBy400)){return true;}
    else return false;
     

};

// Do not edit below this line
module.exports = leapYears;
