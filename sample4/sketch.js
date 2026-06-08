let time = 0;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(220);
  time = frameCount * 0.02;

  drawSection1(0, 0, time);
  drawSection2(150, 0, time);
  drawSection3(300, 0, time);
  drawSection4(450, 0, time);

  drawSection5(0, 100, time);
  drawSection6(150, 100, time);
  drawSection7(300, 100, time);
  drawSection8(450, 100, time);

  drawSection9(0, 200, time);
  drawSection10(150, 200, time);
  drawSection11(300, 200, time);
  drawSection12(450, 200, time);

  drawSection13(0, 300, time);
  drawSection14(150, 300, time);
  drawSection15(300, 300, time);
  drawSection16(450, 300, time);
}

function drawSection1(x, y, t) {
  push();
  translate(x, y);
  fill(175, 195, 195);
  rect(0, 0, 150, 100);
  let offsetX = sin(t) * 15;
  fill(210, 180, 160, 150);
  triangle(0 + offsetX, 0, 150 + offsetX, 100, 0 + offsetX, 100);
  let sizeVar = 1 + sin(t * 1.5) * 0.15;
  fill(220, 190, 170, 100);
  ellipse(75, 50, 100 * sizeVar, 100 * sizeVar);
  fill(255, 230, 180, 60);
  ellipse(110, 20, 150, 40);
  fill(240, 210, 190, 80);
  rect(20, 10, 60, 5);
  fill(250, 220, 200, 70);
  rect(40, 30, 80, 4);
  pop();
}

function drawSection2(x, y, t) {
  push();
  translate(x, y);
  fill(180, 195, 190);
  rect(0, 0, 150, 100);
  let offsetY = cos(t * 1.2) * 10;
  fill(220, 185, 165, 180);
  rect(0, 50 + offsetY, 150, 50);
  fill(230, 200, 180, 120);
  ellipse(75, 80 + offsetY * 0.5, 120, 60);
  fill(255, 220, 190, 90);
  ellipse(50, 30, 90, 20);
  pop();
}

function drawSection3(x, y, t) {
  push();
  translate(x, y);
  let colorShift = sin(t * 0.8) * 30;
  fill(190 + colorShift, 190 + colorShift, 180);
  rect(0, 0, 150, 100);
  fill(240, 160, 120, 150);
  rect(0, 40, 150, 60);
  push();
  translate(75, 50);
  rotate(t * 0.5);
  fill(255, 180, 140, 100);
  triangle(-75, 50, 75, 50, 0, -50);
  pop();
  fill(255, 200, 150, 80);
  ellipse(75, 40, 100, 30);
  pop();
}

function drawSection4(x, y, t) {
  push();
  translate(x, y);
  fill(170, 185, 190);
  rect(0, 0, 150, 100);
  fill(210, 180, 160, 120);
  triangle(0, 0, 150, 100, 0, 100);
  let pulse = 1 + sin(t * 2) * 0.2;
  fill(200, 190, 180, 90);
  ellipse(75, 50, 80 * pulse, 80 * pulse);
  fill(220, 190, 170, 70);
  ellipse(100, 20, 100, 30);
  fill(190, 200, 210, 80);
  rect(30, 40, 70, 6);
  fill(180, 190, 200, 90);
  rect(50, 70, 50, 4);
  pop();
}

function drawSection5(x, y, t) {
  push();
  translate(x, y);
  fill(130, 150, 155);
  rect(0, 0, 150, 100);
  fill(60, 70, 80, 180);
  rect(20, 20, 20, 80);
  fill(50, 60, 70, 150);
  rect(60, 50, 15, 50);
  fill(80, 100, 110, 120);
  rect(130, -30, 5, 50);
  fill(40, 50, 60, 130);
  rect(10, 40, 5, 60);
  fill(70, 80, 90, 140);
  rect(45, 70, 8, 30);
  pop();
}

function drawSection6(x, y, t) {
  push();
  translate(x, y);
  fill(110, 140, 145);
  rect(0, 0, 150, 100);
  fill(50, 60, 70, 160);
  triangle(0, 100, 50, 40, 100, 100);
  fill(65, 80, 90, 120);
  rect(80, 60, 20, 40);
  fill(70, 90, 100, 100);
  triangle(110, 0, 125, 30, 95, 30);
  fill(55, 65, 75, 150);
  rect(30, 50, 4, 50);
  fill(60, 70, 80, 120);
  ellipse(60, 80, 30, 10);
  pop();
}

function drawSection7(x, y, t) {
  push();
  translate(x, y);
  fill(140, 160, 160);
  rect(0, 0, 150, 100);
  let sunY = 40 + sin(t * 0.6) * 25;
  let sunSize = 1 + sin(t * 1.2) * 0.2;
  let sunColor = 255 - abs(sin(t * 0.6)) * 50;
  fill(sunColor, 150, 80, 100);
  ellipse(80, sunY, 65 * sunSize, 65 * sunSize);
  fill(sunColor, 85, 35);
  ellipse(80, sunY, 45 * sunSize, 45 * sunSize);
  fill(255, 120, 60, 120);
  rect(50, 70, 60, 30);
  fill(255, 180, 100, 150);
  rect(65, 60, 10, 3);
  pop();
}

function drawSection8(x, y, t) {
  push();
  translate(x, y);
  fill(120, 145, 150);
  rect(0, 0, 150, 100);
  let wave = cos(t * 1.5) * 5;
  fill(80, 90, 100, 100);
  rect(0, 60 + wave, 150, 40);
  fill(100, 110, 120, 80);
  ellipse(75, 50 + wave, 100, 50);
  fill(90, 100, 110, 90);
  rect(30, 30 + wave * 0.5, 60, 5);
  pop();
}

function drawSection9(x, y, t) {
  push();
  translate(x, y);
  let colorPulse = sin(t * 2) * 15;
  fill(70 + colorPulse, 100 + colorPulse, 105);
  rect(0, 0, 150, 100);
  let wave1 = sin(t * 1.2) * 6;
  let wave2 = sin(t * 1.2 + 0.5) * 5;
  let wave3 = sin(t * 1.2 + 1.0) * 4;
  fill(40, 60, 70, 150);
  rect(0, 40 + wave1, 150, 10);
  fill(35, 50, 60, 120);
  ellipse(75, 80 + wave2, 100, 15);
  fill(50, 70, 80, 130);
  rect(20, 20 + wave3, 80, 4);
  pop();
}

function drawSection10(x, y, t) {
  push();
  translate(x, y);
  fill(60, 90, 95);
  rect(0, 0, 150, 100);
  push();
  translate(75, 55);
  rotate(sin(t) * 0.3);
  fill(30, 40, 50);
  triangle(-45, -25, 55, -25, 5, 25);
  pop();
  let wave1 = sin(t * 1.2 + PI / 4) * 6;
  let wave2 = sin(t * 1.2 + PI / 4 + 0.5) * 5;
  fill(20, 30, 40, 150);
  rect(90, 40 + wave1, 60, 8);
  fill(40, 50, 60, 140);
  rect(10, 70 + wave2, 50, 5);
  pop();
}

function drawSection11(x, y, t) {
  push();
  translate(x, y);
  fill(70, 95, 100);
  rect(0, 0, 150, 100);
  let wave = sin(t * 1.2 + PI / 2) * 5;
  let flicker1 = 150 + sin(t * 3) * 50;
  let flicker2 = 120 + cos(t * 2.5 + 1) * 40;
  fill(255, 90, 40, flicker1);
  rect(60, 10 + wave * 0.3, 40, 5);
  fill(255, 140, 70, flicker2);
  rect(50, 20 + wave * 0.4, 20, 4);
  fill(255, 100, 50, 180);
  rect(70, 35 + wave * 0.5, 25, 4);
  fill(255, 180, 100, 100);
  rect(85, 45 + wave * 0.6, 12, 3);
  fill(255, 85, 35, flicker1 * 0.8);
  rect(55, 60 + wave, 50, 6);
  fill(255, 160, 80, 140);
  rect(80, 55 + wave * 0.8, 15, 3);
  fill(255, 200, 140, 90);
  rect(70, 70 + wave, 15, 2);
  fill(255, 120, 60, flicker2);
  rect(65, 85 + wave, 30, 5);
  fill(255, 130, 60, 130);
  rect(40, 90 + wave * 0.7, 25, 4);
  pop();
}

function drawSection12(x, y, t) {
  push();
  translate(x, y);
  fill(65, 95, 100);
  rect(0, 0, 150, 100);
  let wave1 = sin(t * 1.2 + 3 * PI / 4) * 6;
  let wave2 = sin(t * 1.2 + 3 * PI / 4 + 0.5) * 5;
  let wave3 = sin(t * 1.2 + 3 * PI / 4 + 1.0) * 4;
  fill(45, 65, 75, 180);
  ellipse(75, 50 + wave1, 80, 8);
  fill(35, 55, 65, 140);
  rect(30, 80 + wave2, 90, 6);
  fill(55, 75, 85, 120);
  rect(10, 20 + wave3, 60, 4);
  pop();
}

function drawSection13(x, y, t) {
  push();
  translate(x, y);
  fill(50, 80, 85);
  rect(0, 0, 150, 100);
  let deepWave1 = sin(t * 0.8) * 8;
  let deepWave2 = sin(t * 0.8 + 0.7) * 7;
  let deepWave3 = sin(t * 0.8 + 1.4) * 6;
  fill(20, 30, 40, 180);
  rect(20, 40 + deepWave1, 80, 10);
  let drift = cos(t * 0.9) * 10;
  fill(15, 25, 35, 150);
  triangle(0 + drift, 100, 100 + drift, 80 + deepWave2, 150 + drift, 100);
  fill(35, 55, 65, 100);
  rect(60, 20 + deepWave3, 70, 6);
  fill(25, 45, 55, 130);
  ellipse(40, 80 + deepWave1 * 0.5, 60, 10);
  pop();
}

function drawSection14(x, y, t) {
  push();
  translate(x, y);
  fill(40, 70, 75);
  rect(0, 0, 150, 100);
  let deepWave1 = sin(t * 0.8 + PI / 3) * 8;
  let deepWave2 = sin(t * 0.8 + PI / 3 + 0.7) * 7;
  let deepWave3 = sin(t * 0.8 + PI / 3 + 1.4) * 6;
  let scale = 1 + cos(t * 1.7) * 0.2;
  fill(20, 30, 40, 160);
  ellipse(75, 50 + deepWave1, 120 * scale, 12);
  fill(25, 35, 45, 120);
  rect(30, 70 + deepWave2, 100 * scale, 8);
  fill(30, 40, 50, 140);
  rect(10, 20 + deepWave3, 50, 6);
  pop();
}

function drawSection15(x, y, t) {
  push();
  translate(x, y);
  fill(50, 80, 85);
  rect(0, 0, 150, 100);
  let deepWave = sin(t * 0.8 + 2 * PI / 3) * 7;
  let blink = 80 + sin(t * 2.3) * 40;
  fill(240, 80, 40, blink);
  rect(75, 20 + deepWave * 0.4, 15, 4);
  fill(255, 100, 50, 80);
  rect(60, 50 + deepWave * 0.6, 40, 5);
  fill(255, 120, 60, 60);
  rect(85, 30 + deepWave * 0.5, 20, 4);
  fill(30, 50, 60, 150);
  rect(20, 80 + deepWave, 110, 8);
  fill(200, 80, 40, 70);
  rect(40, 60 + deepWave * 0.7, 30, 5);
  pop();
}

function drawSection16(x, y, t) {
  push();
  translate(x, y);
  fill(45, 75, 80);
  rect(0, 0, 150, 100);
  let deepWave1 = sin(t * 0.8 + PI) * 8;
  let deepWave2 = sin(t * 0.8 + PI + 0.7) * 7;
  let deepWave3 = sin(t * 0.8 + PI + 1.4) * 6;
  let brightness = 180 + sin(t * 1.4) * 50;
  fill(255, brightness, brightness - 50, 90);
  rect(30, 30 + deepWave1, 50, 5);
  let wobble = sin(t * 2.1) * 8;
  fill(25, 35, 45, 180);
  triangle(0 + wobble, 30 + deepWave2, 100 + wobble, 30 + deepWave2, 50 + wobble, 60 + deepWave2);
  fill(15, 25, 35, 160);
  ellipse(75, 80 + deepWave3, 90, 15);
  fill(35, 45, 55, 140);
  rect(90, 50 + deepWave1 * 0.5, 40, 6);
  pop();
}

function keyPressed() {
  if (key === 's') {
    saveGif('ocean_sunset_animation', 5);
  }
}
