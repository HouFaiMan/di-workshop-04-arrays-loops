function setup() {
    createCanvas(400, 400)
    background(200)
}

function draw() {
    drawLines(5, 5);
}

function drawLines(count, numberOfSquares) {
    var x = 10;
    var y = 10;
    for (var i = 0; i < count; i++) {
        drawRow(x, y, numberOfSquares);
        y += 20;
    }
}

function drawRow(x, y, count) {
    for (var i = 0; i < count; i++) {
        rect(x, y, 10, 10);
        x += 20;
    }
}