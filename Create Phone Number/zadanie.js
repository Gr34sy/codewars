// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

//my solution
function createPhoneNumber(numbers){
  const head = `(${numbers.slice(0,3).join('')}) `;
  const body = `${numbers.slice(3,6).join('')}-`;
  const tail = `${numbers.slice(6,10).join('')}`;
    
  return head + body + tail;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// oneliner
const createPhoneNumberOneliner = (numbers) => `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`;
console.log(createPhoneNumberOneliner([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


//optimal solution
function optimal(numbers){
    let format = '(xxx) xxx-xxxx';

    numbers.forEach((el) => {
        format = format.replace('x',el)
    })

    return format;
}

console.log(optimal([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));