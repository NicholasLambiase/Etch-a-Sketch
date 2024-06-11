let default_grid_dimension = 16;
let random_color = false;

// Get the Div that I will be putting all of my squares in to
const grid_container = document.querySelector("#grid-container");

function createGrid(num_squares) {
    let pixel_length = (500 / num_squares) + "px";
    
    for (let index = 0; index < num_squares*num_squares; index++){
        let grid_square = document.createElement("div");
        grid_square.className = "grid-square";
        grid_square.style.width = pixel_length;
        grid_square.style.height = pixel_length;
        grid_container.appendChild(grid_square);
    }

    // Setup the Event listener for each grid_square
    const grid_squares = document.querySelectorAll(".grid-square");
    grid_squares.forEach(sqr => {
        sqr.addEventListener("mouseover", () => {
            if (random_color)
                sqr.style.backgroundColor = getRandomColor();
            else 
                sqr.style.backgroundColor = 'black';
        });
    });
}
    
const clear_btn = document.querySelector("#clear-btn");
clear_btn.addEventListener("click", () => {
    random_color = false;
    let grid_squares = document.querySelectorAll(".grid-square");
    grid_squares.forEach(sqr => {
        sqr.style.backgroundColor = "white";
    });
});

const new_dimensions_btn = document.querySelector("#dimension-btn");
new_dimensions_btn.addEventListener("click", () => {
    dimension = prompt("Enter a number between 1 and 100");
    document.querySelectorAll(".grid-square").forEach(sqr => sqr.remove());
    createGrid(dimension);
});

const rainbow_btn = document.querySelector("#random-color-btn");
rainbow_btn.addEventListener("click", () => {
    random_color = true;
});

function getRandomColor() {
    let hex_values = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++)
        color += hex_values[Math.floor(Math.random()*16)];
    return color;
}

// Default Execution
createGrid(default_grid_dimension);