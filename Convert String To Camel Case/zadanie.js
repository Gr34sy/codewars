// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

//solution
function toCamelCase(str){
  let strTab = str.split(/[_-]/g)
  let camelCaseTab = strTab.map((el, i) => {
    if(i>0){
      return el.charAt(0).toUpperCase()+el.slice(1);
    }else{
      return el.charAt(0).toLowerCase()+el.slice(1);
    } 
  })

  return camelCaseTab.join('');
}

//oneliner
const toCamelCaseOneliner= (str) => str.split(/[_-]/g).map((el, i) => i>0 ? el.charAt(0).toUpperCase()+el.slice(1) : el.charAt(0).toLowerCase()+el.slice(1)).join('');

console.log(toCamelCase('Th3_Slasher'));
console.log(toCamelCaseOneliner('Th3-Slasher'));
console.log(toCamelCase('Slasher_kawai'));
console.log(toCamelCaseOneliner('Slasher_kawai'));
console.log(toCamelCase('vile_smasher_'));
console.log(toCamelCaseOneliner('vile_smasher_'));