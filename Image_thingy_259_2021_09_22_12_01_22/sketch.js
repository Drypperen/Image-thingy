var video;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(400, 400);
}

function draw() {
  background(220);
  
  video.loadPixels();
  loadPixels();
  
  for (var y = 0; y < video.height; y++){
   for(var x = 0; x < video.width; x++){ 
     var index = (video.width - x + 1 + (y * video.width)) * 4;
     var r = video.pixls[index + 0];
     var g = video.pixls[index + 1];     
     var b = video.pixls[index + 2];
     
     var bright = (r+g+b)/3;
     
     var w = map(bright, 0, 255, 0, vScale);
     
     
     noStroke();
     fill(255);
     rectMode(CENTER);
     rect(x + vScale, y + vScale, vScale, vScale);
   }
  }
  
  updatePixels();
  
}
