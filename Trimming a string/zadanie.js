// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!
// The result should be a string of numbers, separated by comma and space.

function trimming(str, size){
    if(str.length <= size) return str;

    let trimmed;
    if(size <= 3){
        const shortened = str.slice(0, size) + '...';
        trimmed = shortened.trim();
    }else{
        const shortened = str.slice(0, size-3) + '...';
        trimmed = shortened.trim();
    }

    return trimmed;
}

console.log(trimming(' ob ',2));


console.log(trimming(' obraz jest fajnt ',13));