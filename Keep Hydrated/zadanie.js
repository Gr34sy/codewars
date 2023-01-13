// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

const hydration = (time) => Math.floor(time * 0.5)

console.log(hydration(1))
console.log(hydration(3))
console.log(hydration(6))
console.log(hydration(2.5))