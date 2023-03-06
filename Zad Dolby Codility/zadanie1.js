//losowe litery
function randomStr(){
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const charLength = chars.length;

    return chars.charAt(Math.floor(Math.random() * charLength));
}

//zad
function palindrome(str){
    if(typeof str != 'string') return;

    const strTab = [...str.toLowerCase()];

    strTab.forEach((el, i, arr) => {
        if(el === '?'){
            const oppositeIndex = arr.length-i-1;

            const replacer = arr[oppositeIndex] != '?' ?  arr[oppositeIndex] : randomStr();

            arr[oppositeIndex] = replacer;
            arr[i] = replacer;
        }
    })

    return strTab.join('') == strTab.reverse().join('')  ? strTab.join('') : 'NO';
}   


console.log(palindrome('?ab??a'));
console.log(palindrome('bab??a'));
console.log(palindrome('?a?'));

console.log(palindrome('za??xz'));