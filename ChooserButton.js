class ChooserButton {
  constructor(src, x, y, value = undefined) {
    this.button = createImg(src, "");
    this.button.position(x, y);
    this.button.pressed = false;
    this.button.value = value;
  }
  
  show() {
    this.button.show();
  }
  
  enable() {
    this.button.removeAttribute("disabled");
  }
  
  disable() {
    this.button.attribute("disabled", "");
    this.button.hide();
  }
  
  position(x, y) {
    this.button.position(x, y);
  }
  
  addMousePressFunction(func) {
    this.button.mousePressed(func.bind(this.button));
  }
  
  addMouseReleaseFunction(func) {
    this.button.mouseReleased(func.bind(this.button));
  }
}