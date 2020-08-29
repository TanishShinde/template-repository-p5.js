// Create a new canvas to match the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Main render loop 
function draw() {
  // Fill in the background
  background("gray");
  
  // Draw a circle
  circle(mouseX, mouseY, 50);
}
