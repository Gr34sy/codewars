// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//don't worry about uppercase vowels
//y is not considered a vowel for this kata


// 1 
function shortcut(string){
    console.log(
        string.replace(/[a,e,i,o,u]/g,'')
    );
}

//2 oneliner 
const  shortcutO = (str) => str.replace(/[aeiou]/g,'');


//3 oneliner which works both on lowercase and uppercase characters
const  shortcutOB = (str) => str.replace(/[aeiou]/gi,'');
