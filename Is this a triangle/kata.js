

function isTriangle(a,b,c){
  const case1 = a+b>c ? true : false;
  const case2 = a+c>b ? true : false;
  const case3 = b+c>a ? true : false;
  
return (case1===true && case2===true && case3===true) ? true : false;
}

const oneliner = (a,b,c) => a+b>c && a+c>b && b+c>a;

console.log(isTriangle(1,2,1));
console.log(oneliner(1,2,1));

console.log(isTriangle(1,1,1));
console.log(oneliner(1,1,1));

console.log(isTriangle(3,2,2));
console.log(oneliner(3,2,2));