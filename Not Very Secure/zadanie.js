// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string){
  const regEx = /[^A-Z0-9]/gi;

  if(string.match(regEx) || string === ""){
    return false;
  }else{
    return true;
  }
}

console.log(alphanumeric("A a"));
console.log(alphanumeric(""));
console.log(alphanumeric("Adqaerq_"));
console.log(alphanumeric("Adqaerq1"));