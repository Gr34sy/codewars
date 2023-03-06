function deleteFive(int){
    const intTab = [...int.toString()];

    if(int<0){
        const digitToRemove = intTab.lastIndexOf('5');
        intTab.splice(digitToRemove,1);
    }else{
        const digitToRemove = intTab.indexOf('5');
        intTab.splice(digitToRemove,1);
    }

    return Number(intTab.join('')) != 0 ? intTab.join('') : 0;
}

console.log(deleteFive(15958));
console.log(deleteFive(-5859));
console.log(deleteFive(-5000));