

function addingShifted (arrays, shift) {
    let result = [];
    let start = 0;
    for (let array of arrays) {
      for (let i = 0; i < array.length; i++ ) {
        result[start + i] = (result[start + i] || 0) + array[i];
      }
      start += shift;
    }
    return result;
  }

console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1]],3))