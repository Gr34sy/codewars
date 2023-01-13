// const theShift = (arrays,shift = 0) => {
//     let agregated = [...arrays[0]];
   
//     for(let i=1; i < arrays.length; i++){
//        console.log('blyb');
//        for(let j = 0; j < arrays[i].length; j++){
//         if(agregated[j+shift]){
//             agregated[j*shift] += arrays[i][j];
//             console.log('blob');
//         }else{
//             agregated.push(arrays[i][j]);
//         }
//       }
//     }

//     return agregated;
// }

function addingShifted (arrays, shift) {
    let result = [];
    let start = 0;
    for (let array of arrays) {
      for (let i = 0; i < array.length; i += 1) {
        result[start + i] = (result[start + i] || 0) + array[i];
      }
      start += shift;
    }
    return result;
  }

console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1]],3))