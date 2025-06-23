const container = document.querySelector("#container");
let row = 16;
let col = 16;

function makeGrid(row, col){
    for(let i = 0; i < row * col; i++){   
        const cell = document.createElement("div");   
        cell.id = "grid-item";
        container.appendChild(cell);
    }
}

makeGrid(row, col);