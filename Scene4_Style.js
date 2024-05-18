class Scene4 {
  constructor(
    s4_Game_Bg,
    s4_Rotate_Button,
    s4_Scale_Button,
    s4_Translate_Button,
    s4_Recolor_Button,
    s4_Next_Button
  ) {
    // Create Background Image
    this.s4_Game_Bg = loadImage(s4_Game_Bg);

    // Create rotating pixels button
    this.s4_Rotate_Button = new ChooserButton("rotate_button.png", 888, 176, "rotate");
    this.s4_Rotate_Button.addMousePressFunction(this.mousePress);
    
    // Create scaling pixels button
    this.s4_Scale_Button = new ChooserButton("scale_button.png", 1152, 176, "scale");
    this.s4_Scale_Button.addMousePressFunction(this.mousePress);
    
    // Create translating pixels button
    this.s4_Translate_Button = new ChooserButton("translate_button.png", 888, 468, "translate");
    this.s4_Translate_Button.addMousePressFunction(this.mousePress);
    
    // Create recoloring pixels button
    this.s4_Recolor_Button = new ChooserButton("recolor_button.png", 1152, 468, "recolor");
    this.s4_Recolor_Button.addMousePressFunction(this.mousePress);
    
    // Create BUTTON TO GO NEXT SCENE
    this.s4_Next_Button = new Button(s4_Next_Button, 1441, 820);
    this.s4_Next_Button.name = "NEXT_S4";

    // Disable scene interaction by default
    this.disable();
  }

  display() {
    // Draw Background Image
    image(this.s4_Game_Bg, 0, 0);

    this.s4_Rotate_Button.show();
    this.s4_Scale_Button.show();
    this.s4_Translate_Button.show();
    this.s4_Recolor_Button.show();

    this.s4_Next_Button.display();
  }

  // A function to DISABLE scene interaction so it cannot interfere with other scenes
  disable() {
    this.s4_Rotate_Button.disable();
    this.s4_Scale_Button.disable();
    this.s4_Translate_Button.disable();
    this.s4_Recolor_Button.disable();

    this.s4_Next_Button.disable();
  }

  // ENABLE scene interaction
  enable() {
    this.s4_Rotate_Button.enable();
    this.s4_Scale_Button.enable();
    this.s4_Translate_Button.enable();
    this.s4_Recolor_Button.enable();

    this.s4_Next_Button.enable();
  }
  
  mousePress(e) {
    this.pressed = !this.pressed;
    this.size(this.pressed ? 162 : 180, AUTO);
    let shiftAmount = this.pressed ? 9 : -9;
    this.position(this.x + shiftAmount, this.y + shiftAmount);
    
    if (this.value === "rotate") {
      willRotate = this.pressed;    
    }
    if (this.value === "scale") {
      willScale = this.pressed;    
    }
    if (this.value === "translate") {
      willTranslate = this.pressed;    
    }
    if (this.value === "recolor") {
      willRecolor = this.pressed;    
    }
    
    
    // THIS PART IS FOR TEST PURPOSES!! BY ENABLING THIS, IT WRITES THE SELECTED PIXEL SIZE UPON CLICKING THE BUTTON.
    // console.log("rotate: " + willRotate + " | " + "scale: " + willScale + " | " + "translate: " + willTranslate + " | " + "recolor: " + willRecolor)
  }
}
