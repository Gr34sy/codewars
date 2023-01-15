function number(arrays){
    let result = 0
    for(let array of arrays){
        result += array[0];
        result -= array[1];
        console.log(result);
    }
    return result;
}



console.log(number([[10,0],[3,5],[5,8]]))