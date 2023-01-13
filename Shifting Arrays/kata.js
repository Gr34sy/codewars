const theShift = (arrays,shift = 0) => {
    let agregated = [...arrays[0]];
   
    for(let i=1; i < arrays.length; i++){
       console.log('blyb');
       for(let j = 0; j < arrays[i].length; j++){
        if(agregated[j+shift]){
            agregated[j+shift] += arrays[i][j];
            console.log('blob');
        }else{
            agregated.push(arrays[i][j]);
        }
      }
    }

    return agregated;
}

console.log(theShift([[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1]],3))