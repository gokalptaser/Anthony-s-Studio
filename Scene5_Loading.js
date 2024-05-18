class Scene5 {
  constructor(
    s5_Game_Bg,
    s5_Speech_Balloon1,
    s5_Speech_Balloon2,
    s5_Speech_Balloon3,
    s5_Speech_Balloon_Done
  ) {
    // Create Background Image
    this.s5_Game_Bg = loadImage(s5_Game_Bg);
    this.speechBalloon = loadImage(s5_Speech_Balloon1);
    this.speechBalloonDone = loadImage(s5_Speech_Balloon_Done);
    this.startTime = 0
  }

  // ENABLE scene interaction
  enable() {
    this.startTime = 0;
  }

  disable() {
    this.startTime = 0;
  }

  display() {
    if (this.startTime === 0) {
      this.startTime = Date.now();
    }
    let currentTime = Date.now();
    let timeTaken = currentTime - this.startTime;
    
    // Draw Background Image
    image(this.s5_Game_Bg, 0, 0);
  
    if (timeTaken < 5000) {
      image(this.speechBalloon, 180, 272);
    }
        
    else {
      image(this.speechBalloonDone, 252, 328);
    }
    
    if (timeTaken >= 7000) {
      const event = new CustomEvent("BUTTON_PRESSED");
      event.name = "WAITED_ENOUGH_TIME";
      dispatchEvent(event);
    }

  }
}
