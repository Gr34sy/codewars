

function reduce(n){
  let digits = [...String(n)]
  while(true){
    let reduced = digits.reduce((acc, digit) => acc + Number(digit), 0);
    if(reduced < 10){
      return reduced;
    }else{
      digits = [...String(reduced)];
    }
  }
}

console.log(reduce(49120));