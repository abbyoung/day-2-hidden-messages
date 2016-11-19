function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  // Hidden message
  textSize(300);
  textFont("Helvetica");
  fill(255);
  text("HELP ME", 100, height/2);
  textSize(100);

  // Make that emoji mouse sing
  if (mouseX < windowWidth/2){
    face = "🙃";
  } else {
    face = "🙂";
  }

  text(face, mouseX, mouseY);
}
