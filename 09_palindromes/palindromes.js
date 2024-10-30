const palindromes = function (word) {

const validChar = "abcdefghijklmnopqrstuvwxyz0123456789";

const cleanString = word
    .toLowerCase()
    .split('')
    .filter((character)=> validChar.includes(character))
    .join('');

const reversed = cleanString.split('').reverse().join('');

return cleanString === reversed;

};

// Do not edit below this line
module.exports = palindromes;
