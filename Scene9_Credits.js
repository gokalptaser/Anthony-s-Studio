class Scene9 {
	constructor(s9_Game_Bg, s9_Back_Button) {
		// Create Background Image
		this.s9_Game_Bg = loadImage(s9_Game_Bg);
      
      	// Create a button to go back to intro
		this.s9_Back_Button = new Button(s9_Back_Button, 1441, 820);
		this.s9_Back_Button.name = "BACK";
		
	
	}
	

	display() {
		// Draw Background Image
		image(this.s9_Game_Bg, 0, 0);
        // Display the start game button
		this.s9_Back_Button.display();
	}
  
  

  
    disable() {
      this.s9_Back_Button.disable()
    }
  
    // ENABLE scene interaction
	enable() {
    this.s9_Back_Button.enable()
	}
}
