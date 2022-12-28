// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//1 
function longestConsec(strarr){
    let tab  = [];
    strarr.forEach((el,ind, arr) => {
        if(arr[ind+1]){
            tab.push(el+ arr[ind+1]);
        }
    })
    return tab;
}