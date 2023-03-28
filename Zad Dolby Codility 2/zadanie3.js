function solution(){
    const table = document.querySelector('table');
    const rowArray = Array.from(table.rows);

    const result = [];
    
    rowArray.forEach((row) => {
        const cellArray = Array.from(row.cells);
        const filteredCells = 
            cellArray.filter((cell) => $(cell).css("color") != $(cell).css("background-color"))
            .map((cell) => cell.textContent)
        .join('');

        result.push(filteredCells);
    })

    return result.join('');
}

