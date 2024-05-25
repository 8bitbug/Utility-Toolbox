const canvas = document.getElementById('animationAbout');
const ctx = canvas.getContext("2d");

function drawRectangle(x, y, width, height, color) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const rectWidth = width;
    const rectHeight = height;

    let rectX, rectY;

    if (x === 'center' && y === 'center') {
        rectX = centerX - rectWidth / 2;
        rectY = centerY - rectHeight / 2;
    } else {
        rectX = x;
        rectY = y;
    }

    ctx.fillStyle = color;
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
}

function drawSquare(x, y, size, color) {
    const squareSize = canvas.width * (size / 100);
    
    const rectX = x === 'center' ? (canvas.width - squareSize) / 2 : x;
    const rectY = y === 'center' ? (canvas.height - squareSize) / 2 : y;

    ctx.fillStyle = color;
    ctx.fillRect(rectX, rectY, squareSize, squareSize);
}

canvas.width = 50 * window.innerWidth / 100;
canvas.height = 89 * window.innerHeight / 100;
drawSquare('center', 'center', 20, 'black');