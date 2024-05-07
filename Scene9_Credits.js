class Scene9 {
	constructor(s9_Game_Bg) {
		// Create Background Image
		this.s9_Game_Bg = loadImage(s9_Game_Bg);
		
	
	}
	
	// ENABLE scene interaction
	enable() {

	}
	
	display() {
		// Draw Background Image
		image(this.s9_Game_Bg, 0, 0);
	}
}
