// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  let answer = true;
  a.forEach((number) => {
    if(number > limit){
      answer =  false;
      return 0;
    }
    console.log("checking " + number)
  })

  return answer;
}

function smallEnough2(a, limit){
  return Math.max(...a) <= limit
}

console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));