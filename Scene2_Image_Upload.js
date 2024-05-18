class Scene2 {
  constructor(s2_Game_Bg, s2_Image_Upload_Button, s2_Next_Button) {
    this.pixelSize = 10; // Kare boyutu
    this.maxCanvasSize = 700; // Canvas için maksimum boyut
    this.img = null; // Yüklenen resmi saklamak için

    // Create Background Image
    this.s2_Game_Bg = loadImage(s2_Game_Bg);

    // Create a button to go back to intro
    this.s2_Next_Button = new Button(s2_Next_Button, 1441, 820);
    this.s2_Next_Button.name = "NEXT_S2";

    // Create file input element
    this.fileInput = createFileInput(this.handleImageUpload.bind(this));
    this.fileInput.hide(); // Başlangıçta gizle

    this.s2_Image_Upload_Button = new ChooserButton(
      "image_upload_button.png",
      1020,
      316,
      this.openFileInput.bind(this)
    );
    this.s2_Image_Upload_Button.addMousePressFunction(this.mousePress);
    this.s2_Image_Upload_Button.addMouseReleaseFunction(this.mouseRelease);

    // Disable scene interaction by default
    this.disable();
  }

  // Function to handle image upload
  handleImageUpload(file) {
    loadImage(
      file.data,
      this.handleImage.bind(this),
      this.handleError.bind(this)
    );
  }

  display() {
    // Draw Background Image
    image(this.s2_Game_Bg, 0, 0);

    this.s2_Next_Button.display();

    this.s2_Image_Upload_Button.show();

    // Draw processed image
    if (this.img) {
      this.drawImage(this.img);
    }
  }

  drawImage(img) {
    loadedImg = img;
  }

  handleImage(loadedImage) {
    if (loadedImage.width > loadedImage.height) {
      loadedImage.resize(this.maxCanvasSize, 0);
    } else {
      loadedImage.resize(0, this.maxCanvasSize);
    }

    this.img = loadedImage;

    // Canvas'ın yüklenen resmin boyutuna göre yeniden boyutlandırılması
    // Canvas'ın boyutunu yüklenen resmin boyutlarına göre yeniden boyutlandır (x, y)
    // resizeCanvas(this.img.width, this.img.height);
  }

  handleError(event) {
    console.error("Dosya bir resim değil");
  }

  // Function to open file input dialog
  openFileInput() {
    this.fileInput.elt.click(); // Dosya giriş alanını aç
  }

  // A function to DISABLE scene interaction so it cannot interfere with other scenes
  disable() {
    this.s2_Image_Upload_Button.disable();
    this.s2_Next_Button.disable();
  }

  // ENABLE scene interaction
  enable() {
    this.s2_Image_Upload_Button.enable();
    this.s2_Next_Button.enable();
  }

  mousePress(e) {
    if (this.pressed) {
      return;
    }
    this.pressed = true;
    this.size(162, AUTO);
    this.position(this.x + 9, this.y + 9);
  }

  mouseRelease(e) {
    this.pressed = false;
    this.size(180, AUTO);
    this.position(this.x - 9, this.y - 9);

    this.value();
  }
}
