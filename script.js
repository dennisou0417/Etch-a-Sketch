//Event Delegation on grid
document.body.addEventListener("mouseover", function(event){
    if(event.target.matches(".grid-item")){
        event.target.classList.add("pen");
    }
})

//Creating Grid
const container = document.querySelector("#container");
let size = 16;

function makeGrid(size){
    for(let i = 0; i < size * size; i++){   
        const cell = document.createElement("div");   
        cell.className = "grid-item";
        cell.id = `box-${i+1}`;
        container.appendChild(cell);
    }
}

makeGrid(size);

const newCanvasBtn = document.querySelector("#new-canvas");

function removeGrid(){
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach(cell => cell.remove());
}

newCanvasBtn.addEventListener("click", () => {
    //console.log(cells[41]);
    let newSize = parseInt(prompt("How many squares for per side for the grid? (max 100)"), 10);
    while(isNaN(newSize) || newSize <= 0 || newSize > 100){
        alert("Please enter an integer less than 100!");
        newSize = parseInt(prompt("How many squares for per side for the grid? (max 100)"), 10);
    }

    size = newSize;

    container.style.width = `${size * 32}px`;
    container.style.height = `${size * 32}px`;

    removeGrid();
    makeGrid(size);
})
