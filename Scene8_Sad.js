class Scene8 {
  constructor(s8_Game_Bg, s8_Restart_Button) {
    // Create Background Image
    this.s8_Game_Bg = loadImage(s8_Game_Bg);
    this.s8_Restart_Button = new Button(s8_Restart_Button, 1448, 832);
    this.s8_Restart_Button.name = "RESTART";
    this.startTime = 0
  }

  display() {
    if (this.startTime === 0) {
      this.startTime = Date.now();
    }
    let currentTime = Date.now();
    let timeTaken = currentTime - this.startTime;
    
    // Draw Background Image
    image(this.s8_Game_Bg, 0, 0);
    
    if (timeTaken >= 6000) {    
      this.s8_Restart_Button.display();
    }
  }

  // ENABLE scene interaction
  enable() {
    this.s8_Restart_Button.enable();
    this.startTime = 0
  }

  disable() {
    this.s8_Restart_Button.disable();
    this.startTime = 0
  }
}
