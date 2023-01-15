

function findLowestInt(k) {
  const k1 = k;
  const k2 = k+1;
  let result = 1;
  const sort = (int, result) => [...String(int*result)].sort().join('');

 
  while(true){
    if(sort(k1,result)===sort(k2,result++)){
      return result-1;
    }
  }
}

console.log(findLowestInt(20));