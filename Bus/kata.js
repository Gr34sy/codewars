function number(arrays){
    let result = 0
    for(let array of arrays){
        result += array[0];
        result -= array[1];
        console.log(result);
    }
    return result;
}

const reducing = (arrays) => arrays.reduce((acc, value) => acc + (value[0]-value[1]), 0)

console.log(reducing([[10,0],[3,5],[5,8]]))

// console.log(number([[10,0],[3,5],[5,8]]))