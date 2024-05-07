// SCENE1 Giriş

let s1; 															
let s1_Game_Bg = "start_bg.png";				// Background image of the scene1
let s1_Start_Button = "start_button.png";	// Start Button image of the scene1
let s1_Credits_Button = "credits_button.png"; // Credits Button image of the scene1


// SCENE2 İmaj Yükleme --> scene6 ya image gönderecek.

let s2; 															
let s2_Game_Bg = "image_upload_bg.png";				// Background image of the scene1
let s2_Image_Upload_Button = "image_upload_button.png";	// Start Button image of the scene1


// SCENE3 Pixel Boyut Belirleme (büyük, orta, küçük)

let s3;
let s3_Game_Bg = "image_size_bg.png";	
let s3_Image_SizeSmall_Button = "image_sizesmall_button.png";	// Start Button image of the scene1
let s3_Image_SizeMedium_Button = "image_sizemedium_button.png";	// Start Button image of the scene1
let s3_Image_SizeLarge_Button = "image_sizelarge_button.png";	// Start Button image of the scene1

// SCENE4 Stil Belirleme (image processing methods)

let s4; 
let s4_Game_Bg = "image_style_bg.png";	
let s4_Image_Rotate_Button = "image_rotate_button.png";	// Start Button image of the scene1
let s4_Image_Scale_Button = "image_scale_button.png";	// Start Button image of the scene1
let s4_Image_Translate_Button = "image_translate_button.png";	// Start Button image of the scene1
let s4_Image_Recolor_Button = "image_recolor_button.png";	// Start Button image of the scene1

// SCENE5 Yüklenme Ekranı (Ayı çiziyor)

let s5; 
let s5_Game_Bg = "loading_bg.gif";
let s5_Speech1_Balloons = "loading_speech_1.png";
let s5_Speech2_Balloons = "loading_speech_2.png";
let s5_Speech3_Balloons = "loading_speech_3.png";
let s5_Speech4_Balloons = "loading_speech_4.png"; //2 saniye sonra scene6 ya geçecek

// SCENE6 Yaptığı Çizimi Sunum Aşaması

let s6;
let s6_Game_Bg = "presentation_screen.png";
let s6_Yes_Button = "yes_button.png"
let s6_No_Button = "no_button.png"
let s6_Save_Button = "save_button.png";
let s6_Speech1_Balloons = "doyoulikeit.png";
let s6_Sticker_Star = "star.png"
let s6_Sticker_Heart = "heart.png"
let s6_Sticker_Smiley = "smiley.png"
let s6_Sticker_Poop = "poop.png"

// SCENE7 YES --> Mutlu

let s7;
let s7_Game_Bg = "presentation_screen.gif";
let s7_GoBack_Button = "goback_button.png"
let s7_Save_Button = "save_button.png";
// let s7_Sticker_Star = "star.png"
// let s7_Sticker_Heart = "heart.png"
// let s7_Sticker_Smiley = "smiley.png"
// let s7_Sticker_Poop = "poop.png"

// SCENE8 NO --> Üzgün

let s8;
let s8_Game_Bg = "sad_screen.gif";

// SCENE9 Credits

let s9;
let s9_Game_Bg = "image_upload_bg.png";

// -----------------------------------------------------
// Global Game Variables
// -----------------------------------------------------
let currentScene = 1;										// Variable stores the current game scene

// -----------------------------------------------------
// Main Setup Function
// -----------------------------------------------------
function setup() {
	createCanvas(1600, 900);							// Canvas size			

	// Init Scene 1 by passing the start button, game background image
	s1 = new Scene1(s1_Game_Bg, s1_Start_Button, s1_Credits_Button);
	s1.enable();											 // Enable scene	
	
	
	// Init Scene 2 by passing Image hero, image banana, image background
	s2 = new Scene2(s2_Game_Bg, s2_Image_Upload_Button);
	
// 	// Init Scene 3 by passing the restart button, fai bg and success bg
// 	s3 = new Scene3(s3_Game_Bg ,s3_Image_SizeSmall_Button, s3_Image_SizeMedium_Button, s3_Image_SizeLarge_Button);
	
// 	// Init Scene 4 by passing the restart button, fai bg and success bg
// 	s4 = new Scene4(s4_Game_Bg ,s4_Image_Rotate_Button, s4_Image_Scale_Button, s4_Image_Translate_Button, s4_Image_Recolor_Button);
	
// 	// Init Scene 5 by passing the restart button, fai bg and success bg
// 	s5 = new Scene5(s5_Game_Bg ,s5_Speech1_Balloons, s5_Speech2_Balloons, s5_Speech3_Balloons, s5_Speech4_Balloons);
		
// 	// Init Scene 6 by passing the restart button, fai bg and success bg
// 	s6 = new Scene6(s6_Game_Bg ,s6_Yes_Button, s6_No_Button, s6_Save_Button, s6_Speech1_Balloons,s6_Sticker_Star,s6_Sticker_Heart,s6_Sticker_Smiley,s6_Sticker_Poop);

// 	// Init Scene 7 by passing the restart button, fai bg and success bg
// 	// yedek s6_Sticker_Star,s6_Sticker_Heart,s6_Sticker_Smiley,s6_Sticker_Poop
// 	s7 = new Scene7(s7_Game_Bg ,s7_GoBack_Button, s7_Save_Button,);
	
// 	// Init Scene 8 by passing the restart button, fai bg and success bg
// 	s8 = new Scene8(s8_Game_Bg);
	
// 	// Init Scene 9 by passing the restart button, fai bg and success bg
	s9 = new Scene9(s9_Game_Bg);
	
	
	
	// Event Listeners that are triggered from scene1, scene2, and scene3
	addEventListener("BUTTON_PRESSED", gameStart);
	addEventListener("GAME_END", gameEnd);
	
}

// -----------------------------------------------------
// Main Draw Function
// -----------------------------------------------------
function draw() {
	background(255);

	// Draw relevant scene according to the value of currentScene
	// currentScene = 1 --> Draw Game intro scene
	if (currentScene == 1) {
		s1.display();
	} 
	
	// currentScene = 2 --> Draw Game play scene
	else if (currentScene == 2) {
		s2.display();
	} 
	
	
	// currentScene = 3 --> Draw Game end scene
	else if (currentScene == 9) {
		s9.display();
	}

}

function gameEnd() {
	currentScene = 3
	switchGameScene(s3);
}

function gameStart(e) {
	if (e.name == "START") {
		//print("Start Game Button Pressed");
		switchGameScene(s2);
		currentScene = 2;
	}
	
	else if(e.name == "CREDITS") {
		switchGameScene(s9);
		currentScene = 9;
	}
}


function switchGameScene(scene) {
	// Disable all scenes first
	s1.disable();
	s2.disable();
	
	
	// Then enable the current Scene
	scene.enable();

}