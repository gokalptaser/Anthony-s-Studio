class Scene3 {
  constructor(
    s3_Game_Bg,
    s3_Small_Pixel_Button,
    s3_Medium_Pixel_Button,
    s3_Large_Pixel_Button,
    s3_Next_Button
  ) {
    // Create Background Image
    this.s3_Game_Bg = loadImage(s3_Game_Bg);

    // Create small pixel button
    this.s3_Large_Pixel_Button = new ChooserButton("large_pixel_button.png", 788, 316, 50);
    this.s3_Large_Pixel_Button.addMousePressFunction(this.mousePress);
    this.s3_Large_Pixel_Button.addMouseReleaseFunction(this.mouseRelease);

    // Create medium pixel button
    this.s3_Medium_Pixel_Button = new ChooserButton("medium_pixel_button.png", 1020, 316, 25);
    this.s3_Medium_Pixel_Button.addMousePressFunction(this.mousePress);
    this.s3_Medium_Pixel_Button.addMouseReleaseFunction(this.mouseRelease);
    
    // Create large pixel button
    this.s3_Small_Pixel_Button = new ChooserButton("small_pixel_button.png", 1252, 316, 10);
    this.s3_Small_Pixel_Button.addMousePressFunction(this.mousePress);
    this.s3_Small_Pixel_Button.addMouseReleaseFunction(this.mouseRelease);

    // Create a button to go back to intro
    this.s3_Next_Button = new Button(s3_Next_Button, 1441, 820);
    this.s3_Next_Button.name = "NEXT_S3";

    // Disable scene interaction by default
    this.disable();
  }

  display() {
    // Draw Background Image
    image(this.s3_Game_Bg, 0, 0);
    this.s3_Small_Pixel_Button.show();
    this.s3_Medium_Pixel_Button.show();
    this.s3_Large_Pixel_Button.show();

    this.s3_Next_Button.display();
  }
  
  // A function to DISABLE scene interaction so it cannot interfere with other scenes
  disable() {
    this.s3_Small_Pixel_Button.disable();
    this.s3_Medium_Pixel_Button.disable();
    this.s3_Large_Pixel_Button.disable();
    this.s3_Next_Button.disable();
  }

  // ENABLE scene interaction
  enable() {
    this.s3_Small_Pixel_Button.enable();
    this.s3_Medium_Pixel_Button.enable();
    this.s3_Large_Pixel_Button.enable();
    this.s3_Next_Button.enable();
  }
  
  mousePress(e) {
    if (this.pressed) {
      return;
    }
    this.pressed = true;
    this.size(162, AUTO);
    this.position(this.x + 9, this.y + 9);
    loadedImgPixelSize = this.value;
    
    // THIS PART IS FOR TEST PURPOSES!! BY ENABLING THIS, IT WRITES THE SELECTED PIXEL SIZE UPON CLICKING THE BUTTON.
    // console.log("Selected pixel size: " + loadedImgPixelSize);
  }
  
  mouseRelease(e) {
    this.pressed = false;
    this.size(180, AUTO);
    this.position(this.x - 9, this.y - 9);
  }
}
