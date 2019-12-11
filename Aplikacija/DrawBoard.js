let distances = [];
let maxDistance;
let matrixSize =20;
let boardSize;
let squareSize ; 
let font, fontsize = 32;
let posX=0, posY=0;
let keyIndex = -1;
let rectWidth;
let checked = [];
let checkedPosX =[];
let checkedPosY =[];
let checkedIndex =0;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  //font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
    createCanvas(800, 800);
    for (let x = 0; x < matrixSize; x++) {
      distances[x] = []; 
      for (let y = 0; y < matrixSize; y++) {
        distances[x][y] = (x *matrixSize)+y;
      }
    }
    boardSize = width * 0.9;
    squareSize = boardSize/matrixSize;
    rectWidth = width / 4;

    // Set text characteristics
    textFont("Gorgia");
    textSize(fontsize);
    textAlign(CENTER, CENTER);
    noLoop();
  }
  
  function draw() {
    background(220);
    stroke(100, 100, 100);
    translate(width * 0.05, height * 0.05);
    for (let x = 0; x < matrixSize; x++) {
      for (let y = 0; y < matrixSize; y++) {
        fill(100, 0, 0);
        for (let c = 0; c < checkedIndex; c++){
          if(checkedPosX[c]==x && checkedPosY[c]==y)
          rect(squareSize * x, squareSize *y, squareSize, squareSize);
        }
        fill(0, 0, 0);
        keyIndex = 65+((x *matrixSize)+y)%26;
        if(keyIndex == 77 || keyIndex == 87) {modification = squareSize * 0.55}
        else {modification =0}
         
        text(char(keyIndex), squareSize * x, (squareSize *y) + modification, squareSize, squareSize);
        fill(255, 255, 255);
      }
    }
  }

  function keyPressed() {
      //fill(0, 0, 0);
      //text(key, squareSize * posX, squareSize *posY +2, width, 100);
      //text(key, 10, 10, width, 100);
      switch(key){
        case 'ArrowRight': posX++; break;
        case 'ArrowLeft': posX--; break;
        case 'ArrowUp': posY--; break;
        case 'ArrowDown': posY++; break;
      }
      checkedPosX[checkedIndex] = posX;
      checkedPosY[checkedIndex] = posY;
      checked[checkedIndex] = key;
      checkedIndex++;
      redraw();
  }