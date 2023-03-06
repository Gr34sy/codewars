//solution 1 

function square1(a, b) {
    const total = a + b;
    let lengthTogether = total / 4;

    while(lengthTogether > 0){
        let maxA = a / lengthTogether;
        let maxB = b / lengthTogether;

        if(maxA + maxB >= 4){
            return lengthTogether;
        }

        lengthTogether--;
    }

    return 0;
}

//solution 2
// If the small input (A or B) is 3 times smaller than the large input (A or B), the largest possible cut cannot be greater than the small input. e.g. longestStick(2, 25) --> 2
// If both inputs are equal, then the largest possible cut is the half of the any of inputs (A, B). e.g. longestStick(20, 20) --> 10
// Otherwise, it is whatever is the 3 divided by the large input (A or B) rounded down. e.g. longestStick(15, 25) --> 8
function square2(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    if(max / min > 3) return min;
    if(max === min) return max / 2;
    return Math.floor(max / 3);
}

console.log(square2(1,8));