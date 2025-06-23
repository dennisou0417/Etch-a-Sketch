//Event Delegation on grid
document.body.addEventListener("mouseover", function(event){
    if(event.target.matches(".grid-item")){
        event.target.classList.add("pen");
    }
})

//Creating Grid
const container = document.querySelector("#container");
let row = 16;
let col = 16;

for(let i = 0; i < row * col; i++){   
    const cell = document.createElement("div");   
    cell.className = "grid-item";
    cell.id = `box-${i+1}`;
    container.appendChild(cell);
}

