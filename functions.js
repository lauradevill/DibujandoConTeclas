let canva = document.getElementById("myCanvas");//Get Canvas
let dArea = canva.getContext("2d");//Get Context of canvas
let button = document.getElementById("eraseButton");//Get erase button
button.addEventListener("click", eraseDraw);

//Erase the draw
function eraseDraw(){
    window.location.reload();
}

let x = canva.width / 2; //center point in x
let y = canva.height / 2; //center point in y

drawLine("#102c54", x - 1, y - 1, x + 1, y + 1, dArea); //initial point to starting to draw

//Paint a line in canvas
function drawLine(color, xInitial, yInitial, xFinal, yFinal, drawingArea){
    drawingArea.beginPath();
    drawingArea.strokeStyle = color;
    drawingArea.lineWidth = 3
    drawingArea.moveTo(xInitial, yInitial);
    drawingArea.lineTo(xFinal, yFinal);
    drawingArea.stroke();
    drawingArea.closePath();
}

let keys = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40  
};

document.addEventListener("keyup", drawWithArrows);

//Paint using the arrows keys
function drawWithArrows(event){
    let colorLine = "#102c54";
    let move = 10;
    switch (event.keyCode){
        case keys.LEFT:
            drawLine(colorLine, x, y, x - move, y, dArea);
            x = x - move;
            break;
        case keys.UP:
            drawLine(colorLine, x, y, x, y - move, dArea);
            y = y - move;
            break;
        case keys.RIGHT:
            drawLine(colorLine, x, y, x + move, y, dArea);
            x = x + move;
            break;
        case keys.DOWN:
            drawLine(colorLine, x, y, x, y + move, dArea);
            y = y + move;
            break;
        default:
            alert("Esa tecla no funciona para dibujar!");
    }
}

