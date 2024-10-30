const removeFromArray = function(array1,  ... args) {

    let array2 = [];

    array1.forEach((item) => {

        if(!args.includes(item)){
            array2.push(item);
        }
        
    });

    return array2;
};

// Do not edit below this line
module.exports = removeFromArray;
