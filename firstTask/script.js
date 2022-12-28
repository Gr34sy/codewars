// task Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


// 1 with new Set (only cuts off duplicates)
function unique_in_order(seq){
    const tab = [...seq];
    const tabFiltered = [... new Set(tab)]
    console.log(tabFiltered);
}

// 2 one liner function with new Set (only cuts off duplicates)
const unique_in_order_2 = (seq) => console.log([... new Set( typeof seq==="string" ? [...seq] : seq)]);


// 3 without new Set (only cuts off duplicates)
const unique_in_order_3 = (seq) => {
    if(typeof seq === 'string'){
        return [...seq].filter((value,index,self)=> self.indexOf(value)===index)
    }else{
        return seq.filter((value,index,self)=> self.indexOf(value)===index)
    }
}


//4 correct solution - cuts off only duplicates that are next to each other 
const correct = (seq) => {
    const tab = [...seq];
    let similar = null;
    filteredTab = [];

    tab.forEach((el) => {
        if(el!=similar){
            filteredTab.push(el);
        }
        return similar = el;
    })

    return filteredTab;
}