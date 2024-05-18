let imgObj = {
  x: 0,
  y: 0,
  cl: 0,
};

let imgDataArr = [];

let loadedImg = null;

let loadedImgPixelSize = 10; // Kare boyutu

let willRotate = false;
let willScale = false;
let willTranslate = false;
let willRecolor = false;
let globalRandomSeed;

// SCENE1 Giriş

let s1;
let s1_Game_Bg = "start_bg.png";
let s1_Start_Button = "start_button.png";
let s1_Credits_Button = "credits_button.png";

// SCENE2 İmaj Yükleme --> scene6 ya image gönderecek.

let s2;
let s2_Game_Bg = "image_upload_bg.png";
let s2_Image_Upload_Button = "image_upload_button.png";
let s2_Next_Button = "next_button.png";

// SCENE3 Pixel Boyut Belirleme (büyük, orta, küçük)

let s3;
let s3_Game_Bg = "pixel_size_bg.png";
let s3_Small_Pixel_Button = "small_pixel_button.png";
let s3_Medium_Pixel_Button = "medium_pixel_button.png";
let s3_Large_Pixel_Button = "large_pixel_button.png";
let s3_Next_Button = "next_button.png";

// SCENE4 Stil Belirleme (image processing methods)

let s4;
let s4_Game_Bg = "pixel_style_bg.png";
let s4_Rotate_Button = "rotate_button.png";
let s4_Scale_Button = "scale_button.png";
let s4_Translate_Button = "translate_button.png";
let s4_Recolor_Button = "recolor_button.png";
let s4_Next_Button = "next_button.png";

// SCENE5 Yüklenme Ekranı (Ayı çiziyor)

let s5;
let s5_Game_Bg = "loading_bg.gif";
let s5_Speech_Balloon1 = "loading_speech_1.png";
let s5_Speech_Balloon2 = "loading_speech_2.png";
let s5_Speech_Balloon3 = "loading_speech_3.png";
let s5_Speech_Balloon_Done = "loading_speech_done.png"; //2 saniye sonra scene6 ya geçecek

// SCENE6 Yaptığı Çizimi Gösteriyor

let s6;
let s6_Game_Bg = "presentation_screen.png";
let s6_Yes_Button = "yes_button.png";
let s6_No_Button = "no_button.png";
let s6_Save_Button = "save_button.png";
let s6_Sticker_Star = "star.png";
let s6_Sticker_Heart = "heart.png";
let s6_Sticker_Smiley = "smiley.png";
let s6_Sticker_Poop = "poop.png";

// SCENE7 YES --> Mutlu

let s7;
let s7_Game_Bg = "happy_screen.gif";
let s7_Save_Button = "save_button.png";
let s7_Back_Button = "back_button.png";

let restartButton = "restart.png";
// let s7_Sticker_Star = "star.png"
// let s7_Sticker_Heart = "heart.png"
// let s7_Sticker_Smiley = "smiley.png"
// let s7_Sticker_Poop = "poop.png"

// SCENE8 NO --> Üzgün

let s8;
let s8_Game_Bg = "sad_screen.gif";

// SCENE9 Credits

let s9;
let s9_Game_Bg = "credits.png";
let s9_Back_Button = "back_button.png";

// -----------------------------------------------------
// Global Game Variables
// -----------------------------------------------------
let currentScene = 1; // Variable stores the current game scene

// -----------------------------------------------------
// Main Setup Function
// -----------------------------------------------------
function setup() {
  createCanvas(1600, 900); // Canvas size
  globalRandomSeed = Math.floor(random(1000));  
  
  // Init Scene 1 by passing the start button, game background image
  s1 = new Scene1(s1_Game_Bg, s1_Start_Button, s1_Credits_Button);
  s1.enable(); // Enable scene

  // Init Scene 2 by passing Image hero, image banana, image background
  s2 = new Scene2(s2_Game_Bg, s2_Image_Upload_Button, s2_Next_Button);

  // Init Scene 3 - PIXEL SIZE
  s3 = new Scene3(
    s3_Game_Bg,
    s3_Small_Pixel_Button,
    s3_Medium_Pixel_Button,
    s3_Large_Pixel_Button,
    s3_Next_Button
  );

  // Init Scene 4 - STYLE
  s4 = new Scene4(
    s4_Game_Bg,
    s4_Rotate_Button,
    s4_Scale_Button,
    s4_Translate_Button,
    s4_Recolor_Button,
    s4_Next_Button
  );

  // Init Scene 5 - LOADING ANIMATION
  s5 = new Scene5(
    s5_Game_Bg,
    s5_Speech_Balloon1,
    s5_Speech_Balloon2,
    s5_Speech_Balloon3,
    s5_Speech_Balloon_Done
  );

  // Init Scene 6 - PRESENTATION
  s6 = new Scene6(s6_Game_Bg, s6_Yes_Button, s6_No_Button);

  // Init Scene 7 - HAPPY
  s7 = new Scene7(s7_Game_Bg, s7_Save_Button, restartButton);

  // Init Scene 8 - SAD
  s8 = new Scene8(s8_Game_Bg, restartButton);

  // Init Scene 9 - CREDITS
  s9 = new Scene9(s9_Game_Bg, s9_Back_Button);

  // Event Listeners that are triggered from scene1, scene2, and scene3
  addEventListener("BUTTON_PRESSED", gameStart);
}

// -----------------------------------------------------
// Main Draw Function
// -----------------------------------------------------
function draw() {
  noStroke();
  background(255);

  // Draw relevant scene according to the value of currentScene
  // currentScene = 1 --> Draw Game intro scene
  if (currentScene === 1) {
    s1.display();
  }

  // currentScene = 2 --> Draw Game play scene
  else if (currentScene === 2) {
    s2.display();
  }

  // currentScene = 2 --> Draw Game play scene
  else if (currentScene === 3) {
    s3.display();
  }

  // currentScene = 2 --> Draw Game play scene
  else if (currentScene === 4) {
    s4.display();
  }

  // currentScene = 2 --> Draw Game play scene
  else if (currentScene === 5) {
    s5.display();
  }

  // currentScene = 2 --> Draw Game play scene
  else if (currentScene === 6) {
    s6.display();
  }

  // currentScene = 2 --> Draw Game play scene
  else if (currentScene === 7) {
    s7.display();
  }

  // currentScene = 2 --> Draw Game play scene
  else if (currentScene === 8) {
    s8.display();
  }

  // currentScene = 3 --> Draw Game end scene
  else if (currentScene === 9) {
    s9.display();
  }
}

function gameStart(e) {
  switch (e.name) {
    case "START":
      switchGameScene(s2);
      currentScene = 2;
      break;
    case "CREDITS":
      switchGameScene(s9);
      currentScene = 9;
      break;
    case "NEXT_S2":
      switchGameScene(s3);
      currentScene = 3;
      break;
    case "NEXT_S3":
      switchGameScene(s4);
      currentScene = 4;
      break;
    case "NEXT_S4":
      switchGameScene(s5);
      currentScene = 5;
      break;
    case "YES_S6":
      switchGameScene(s7);
      currentScene = 7;
      break;
    case "NO_S6":
      switchGameScene(s8);
      currentScene = 8;
      break;
    case "BACK":
    case "RESTART":
      switchGameScene(s1);
      currentScene = 1;
      break;
    case "WAITED_ENOUGH_TIME":
      switchGameScene(s6);
      currentScene = 6;
      break;
    case "SAVE":
      save('art_by_Anthony.png');
      break;
  }
}

function switchGameScene(scene) {
  // Disable all scenes first
  s1.disable();
  s2.disable();
  s3.disable();
  s4.disable();
  s5.disable();
  s6.disable();
  s7.disable();
  s8.disable();
  s9.disable();
  // Then enable the current Scene
  scene.enable();
}


// THIS PART IS FOR TESTING PURPOSES!! ENABLE THIS PART IN ORDER TO SWITCH BETWEEN SCENES (Q FOR PREVIOUS SCENE, E FOR NEXT SCENE)

// // -----------------------------------------------------
// // Key press handling function
// // -----------------------------------------------------
// function keyPressed() {
//   if (keyCode === 81) {
//     // Check for 'Q' key press
//     console.log("Q key pressed - Go to previous scene");
//     handleSceneChange(-1);
//   } else if (keyCode === 69) {
//     // Check for 'E' key press
//     console.log("E key pressed - Go to next scene");
//     handleSceneChange(1);
//   }
// }

// // -----------------------------------------------------
// // Scene change handling function
// // -----------------------------------------------------
// function handleSceneChange(sceneOffset) {
//   let nextScene = currentScene + sceneOffset;

//   // Check for scene boundary conditions
//   if (nextScene < 1) {
//     nextScene = 1; // Loop back to first scene from the last scene
//   } else if (nextScene > 9) {
//     nextScene = 9; // Loop back to last scene from the first scene
//   }

//   // Call switchGameScene to change scene
//   if (nextScene !== currentScene) {
//     switchGameScene(getSceneObject(nextScene));
//     currentScene = nextScene;
//   }
// }

// // -----------------------------------------------------
// // Function to get the scene object based on scene number
// // -----------------------------------------------------
// function getSceneObject(sceneNumber) {
//   switch (sceneNumber) {
//     case 1:
//       return s1;
//     case 2:
//       return s2;
//     case 3:
//       return s3;
//     case 4:
//       return s4;
//     case 5:
//       return s5;
//     case 6:
//       return s6;
//     case 7:
//       return s7;
//     case 8:
//       return s8;
//     case 9:
//       return s9;
//   }
// }
