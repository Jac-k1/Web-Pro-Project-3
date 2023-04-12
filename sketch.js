function make_array(cols, rows) {
    let array = new Array(cols);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows)
    }
    return array;
}

let grid;
let cols;
let rows;
let resolution = 40;

function setup() {
    createCanvas(400, 400);
    cols = width / resolution;
    rows = height / resolution;
    grid = make_array(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] =floor(random(2));
        }
    }
}

function draw() {
    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < cols; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255);
                stroke(0);
                rect(x, y, resolution-1, resolution);
            }
        }
    }

    let next_array = make_array(cols, rows);

    grid = next_array;
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < cols; j++) {
            let state = grid[i][j];
            // edges
            if (i == 0 || i == cols -1 || j == 0 || j == rows -1) {
                next[i][j] = state;
            }

            let sum = 0;
            let neighbors = count_neighbors(grid, i, j);

            if (state == 0 && neighbors == 3) {
                next[i][j] = 1;
            }
            else if (state == 1 && neighbors < 2 || neighbors > 3) {
                next[i][j] = 0;
            }
            else {
                next[i][j] = state;
            }
        }
    }

}

function count_neightbors(grid, x, y) {
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            sum += grid[i][j];
        }
    }

    sum -= grid[x][y]
}