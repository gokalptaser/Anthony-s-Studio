// /////
// //29.04 update v1.0 : start
// // 29.04 update v1.0: yüklenilen resmi pixelli yaptı
// // 29.04 update v1.0: kod cleanup and minor improvements
// // 30.04 update v1.1: painting canvas sınırları belirlendi, 700lük bir alan
// // 03.05 update v1.1.2: çizimler ve animasyonlar yapıldı
// // 05.05 update v1.2: sceneler hazırlandı
// // 05.05 update v1.3: sceneler çalıştırılma progress
//
//
// //Declare Utils as a variable
// var utils = new p5.Utils();
//
// //resizing the image painting
// const maxCanvasSize = 700;
//
// let fileInput; //Dosya Butonu :D
// let img; // image uploaded
//
// //NOT: default olarak 30, ama sizei 3 seçenek arasından seçtirilebilir resmi çizmeden önce, küçük orta büyük gibi
// let pixelSize = 30;
//
// // Painting Canvasının Koordinatları
// const paintingPlacementX = 250;
// const paintingPlacementY = 250;
//
//
// function setup() {
//
//
//   background(100);
//
//   // Dosya seçim alanını canvas'ın köşesine yerleştir
//   fileInput = createFileInput(imageControl); // Dosya seçim alanı
//   fileInput.position(windowWidth/2-100, windowHeight/2+200); // Dosya seçim alanının konumu
// 	noLoop();
// }
//
// function draw() {
//   if (img) { // Eğer bir resim yüklendiyse
//     drawImage(img); // Resmi çiz
//   }
// }
//
// // Image Kontrol Bölümü
// function imageControl(file) {
//   // Dosyayı yükle
// 	loadImage(file.data, handleImage, handleError);
// }
//
// function drawImage(img) {
//   for (let y = 0; y < img.height; y += pixelSize) {
//     for (let x = 0; x < img.width; x += pixelSize) {
//
// 			// get the average color of the area
// 			const pixelColor = getAverageColor(img, x, y);
// 			// draw a square with the color of the pixel
// 			fill(pixelColor);
// 			noStroke();
// 			square(x, y, pixelSize);
//
//     }
//  	}
// }
//
//
// //// CALCULATES THE AVERAGE RGB FOR THE SQUARE (PIXEL)////
// function getAverageColor(img, i, j) {
//   img.loadPixels();
//   let redSum = 0, greenSum = 0, blueSum = 0;
//   let count = 0;
//   let maxI = Math.min(i + pixelSize, img.width);
//   let maxJ = Math.min(j + pixelSize, img.height);
//
//   for (let k = i; k < maxI; k++) {
//     for (let l = j; l < maxJ; l++) {
//       let idx = (k + l * img.width) * 4;
//       redSum += img.pixels[idx];
//       greenSum += img.pixels[idx + 1];
//       blueSum += img.pixels[idx + 2];
//       count++;
//     }
//   }
//
//   if (count === 0) return color(0, 0, 0); // Sıfıra bölme hatasını önlemek için
//
//   return color(
//     redSum / count,
//     greenSum / count,
//     blueSum / count
//   );
// }
//
// function handleImage(loadedImage) {
// 	if (loadedImage.width > loadedImage.height) {
// 		loadedImage.resize(maxCanvasSize, 0);
// 	}
// 	else {
// 		loadedImage.resize(0, maxCanvasSize);
// 	}
//
// 	img = loadedImage;
//
// 	// Canvas'ın yüklenen resmin boyutuna göre yeniden boyutlandırılması
// 	resizeCanvas(img.width, img.height); // Canvas'ın boyutunu yüklenen resmin boyutlarına göre yeniden boyutlandır (x, y)
// }
//
// function handleError(event) {
// 	console.error('Dosya bir resim değil');
// }
