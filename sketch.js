let diceRoll;

function setup() {
  createCanvas(600, 600);
  noStroke();
  colorMode(HSB); // hue saturation and brightness != red, green, blue
}

function mousePressed() {
  loop();
}

function draw() {
  noLoop();  

      /*
      if (diceRoll == 0) {
        fill(10, 50, 80);
      } else if (diceRoll == 1) {
        fill(70, 50, 80);
      } else if (diceRoll == 2) {
        fill(120, 50, 80);
      } else {
        fill(170, 50, 80);
      }
      */
      

  
  for (let columns = 0; columns < 30; columns++) {
    
    for (let rows = 0; rows < 30; rows++) {
      
      diceRoll = int(random(12));
      console.log("dice result: " + diceRoll);
      
      let mappedHue = map(diceRoll, 0, 11, 0, 360);
      let squareColor;
      
      for (let i = 4; i >= 0; i--) {
        squareColor = color(mappedHue, 50, 20 + (i * 20));
        fill(squareColor);
        rect(columns * 20, rows * 20, i * 5, i * 5);
        // circle(columns * 20, rows * 20, i * 5);
        
      }
      
    }
    
  }
  
  // save("image.jpg");
}
