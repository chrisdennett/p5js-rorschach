var increment = 0.008;
var zoff = 0.0;
var zincrement = 0.008;

function setup() {
  createCanvas(400, 400);

  background(0);
}

function draw() {

  loadPixels();

  var xoff = 0.0;
  for (var x = 0; x < width / 2; x++) {
    xoff += increment;
    var yoff = 0.0;

    for (var y = 0; y < height; y++) {
      yoff += increment;
      var bright = noise(xoff, yoff, zoff) * 255;
      
      if(bright>110){
        bright = 255;
      }else{
        bright = 0;
      }

      var loc = (x + y * width) * 4;
      pixels[loc] = bright;
      pixels[loc + 1] = bright;
      pixels[loc + 2] = bright;

      var flippedXPos = width - x - 1;
      var flippedLoc = (flippedXPos + y * width) * 4;
      pixels[flippedLoc] = bright;
      pixels[flippedLoc + 1] = bright;
      pixels[flippedLoc + 2] = bright;

    }
  }

  updatePixels();
  zoff += zincrement;

}