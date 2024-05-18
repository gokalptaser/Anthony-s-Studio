class Scene6 {
  constructor(
    s6_Game_Bg,
    s6_Yes_Button,
    s6_No_Button
  ) {
    // Create Background Image
    this.s6_Game_Bg = loadImage(s6_Game_Bg);

    this.s6_Yes_Button = new Button(s6_Yes_Button, 787, 844);
    this.s6_Yes_Button.name = "YES_S6";

    this.s6_No_Button = new Button(s6_No_Button, 996, 844);
    this.s6_No_Button.name = "NO_S6";
      
    // Disable scene interaction by default
    this.disable();
  }

  display() {
    
    // Draw Background Image
    image(this.s6_Game_Bg, 0, 0);


    push();
    randomSeed(globalRandomSeed);
    angleMode(DEGREES);
    
    let yMid = 76 + (height - 76 - 124) / 2 - loadedImg.height / 2;
    let xMid = 524 + (width - 376 - 524) / 2 - loadedImg.width / 2;
    
    translate(xMid, yMid);
    this.drawImage(loadedImg);
    
    ////////////////BORDERS
    push();
    translate(-xMid, -yMid);
    
    ////BLUE
    fill('#8CB6C0');
    //left
    rect(472, 0, 52, 724);
    //right
    rect(1224, 0, 80, 724);
    //top
    rect(472, 0, 760, 76);
    
    ////YELLOW
    fill('#EEC39A');
    //left
    rect(472, 724, 52, 160);
    //right
    rect(1224, 724, 80, 160);
    //bottom
    rect(472, 776, 845, 110);
    
    pop();
    ///////////////
    
    pop();
    
    this.s6_Yes_Button.display();
    this.s6_No_Button.display();
  }
  
  drawImage(img) {
    for (let y = 0; y < img.height; y += loadedImgPixelSize) {
      for (let x = 0; x < img.width; x += loadedImgPixelSize) {
        // get the average color of the area
        const pixelColor = this.getAverageColor(img, x, y);
        fill(pixelColor);
        push();
        translate(x, y);
        this.applyPixel(pixelColor);
        pop();
      }
    }
  }
  
  applyPixel(pixelColor) {    
    if (willRotate) {
      translate(loadedImgPixelSize / 2, loadedImgPixelSize / 2);
      rotate(this.randomInteger(0, 45));
    }
    
    if (willTranslate) {
      let x = this.randomInteger(-5, 5);
      let y = this.randomInteger(-5, 5);
      translate(x, y);
    }
    
    if (willScale) {
      let scaleFactor = this.randomFloat(0.5, 2);
      let translation = loadedImgPixelSize * (1 - scaleFactor) / 2;
      translate(translation, translation);
      scale(scaleFactor);
    }
    
    square(0, 0, loadedImgPixelSize);
    
    if (willRecolor) {
      let opacity = this.randomInteger(50, 120);
      let r = this.randomInteger(50, 150);
      let g = this.randomInteger(50, 150);
      let b = this.randomInteger(50, 150);
      fill(color(r, g, b, opacity));
      square(0, 0, loadedImgPixelSize);
    }
  }
  
  randomInteger(minimum, maximum) {
    return Math.floor(random(minimum, maximum + 1));
  }
  
  randomFloat(minimum, maximum) {
    return random(minimum, maximum);
  }

  getAverageColor(img, i, j) {
    let redSum = 0,
      greenSum = 0,
      blueSum = 0;
    let count = 0;
    let maxI = Math.min(i + loadedImgPixelSize, img.width);
    let maxJ = Math.min(j + loadedImgPixelSize, img.height);

    for (let k = i; k < maxI; k++) {
      for (let l = j; l < maxJ; l++) {
        let idx = (k + l * img.width) * 4;
        redSum += img.pixels[idx];
        greenSum += img.pixels[idx + 1];
        blueSum += img.pixels[idx + 2];
        count++;
      }
    }

    // Eksik noktalı virgül eklendi
    if (count === 0) return color(0, 0, 0); // Sıfıra bölme hatasını önlemek için

    return color(redSum / count, greenSum / count, blueSum / count);
  }

  // A function to DISABLE scene interaction so it cannot interfere with other scenes
  disable() {
    this.s6_Yes_Button.disable();
    this.s6_No_Button.disable();
  }

  // ENABLE scene interaction
  enable() {
    this.s6_Yes_Button.enable();
    this.s6_No_Button.enable();

    loadedImg.loadPixels();
  }
}
