//1

//tablica liter z alfabetu
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

function encrypt(text){
    const result = [];
    const textArray = [...text];

    textArray.forEach((letter) =>{
        const i = alphabet.indexOf(letter);
        const changedLetter = i+4 > alphabet.length-1 ? alphabet[i+4-alphabet.length] : alphabet[i+4];
        result.push(changedLetter);
    })

    return result.join('');

}


console.log(encrypt('ZEBRA'));
console.log(encrypt('PINEAPPLE'));
console.log(encrypt('NETWORK'));
console.log(encrypt('VET'));