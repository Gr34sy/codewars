const theShift = (arrays, shift) => {
    let agregated = [...arrays[0]];
   
    for(i=1; i < arrays.length; i++){
       for(j = 0+shift; j < arrays[i].length; j++){
        if(agregated[j]){
            agregated[j] =+ arrays[i][j];
        }else{
            agregated.push(arrays[i][j]);
        }
       }
    }

    return agregated;
}

console.log(theShift([[1,1],[2,2]]))