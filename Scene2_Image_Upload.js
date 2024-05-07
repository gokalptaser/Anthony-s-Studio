class Scene2 {
	constructor(s2_Game_Bg, s2_Image_Upload_Button) {
		
		// Create Background Image
		this.s2_Game_Bg = loadImage(s2_Game_Bg);
		
		
		// Create a button to start the game
		
		this.s2_Image_Upload_Button = new Button(s2_Image_Upload_Button, 804,400);
		this.s2_Image_Upload_Button.name = "Image Upload";
		
		
		// Disable scene interaction by default
		this.disable();
	}
	
	display() {
		// Draw Background Image
		image(this.s2_Game_Bg, 0, 0);
		
		// Display the start game button
		this.s2_Image_Upload_Button.display();
	}
	
	// A function to DISABLE scene interaction so it cannot interfere with other scenes
	disable() {
		this.s2_Image_Upload_Button.disable();
	}
	
	// ENABLE scene interaction
	enable() {
		this.s2_Image_Upload_Button.enable();
	}
}