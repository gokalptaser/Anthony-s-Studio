class Scene1 {
	constructor(s1_Game_Bg, s1_Start_Button, s1_Credits_Button) {
		// Create Background Image
		this.s1_Game_Bg = loadImage(s1_Game_Bg);
		
		// Create a button to start the game
		this.s1_Start_Button = new Button(s1_Start_Button, 1114, 325);
		this.s1_Start_Button.name = "START";

		// Create a button to view the credits of the game
		this.s1_Credits_Button = new Button(s1_Credits_Button, 1114, 500);
		this.s1_Credits_Button.name = "CREDITS";
		
		// Listen for clicks on the credits button
		this.s1_Credits_Button.onClick = this.handleCreditsButtonClick.bind(this);
	}
	
	display() {
		// Draw Background Image
		image(this.s1_Game_Bg, 0, 0);
		
		// Display the start game button
		this.s1_Start_Button.display();
		
		// Display the credits button
		this.s1_Credits_Button.display();
	}
	
	// Function to handle credits button click
	handleCreditsButtonClick() {
		// Go to Scene9
		sceneManager.showScene(Scene9);
	}
	
	// A function to DISABLE scene interaction so it cannot interfere with other scenes
	disable() {
		this.s1_Start_Button.disable();
		this.s1_Credits_Button.disable();
  
	}
	
	// ENABLE scene interaction
	enable() {
		this.s1_Start_Button.enable();
		this.s1_Credits_Button.enable();
	}
}
