let x = 300;
let y = 0;
let blinking = false;
let blinkTimer = 0;
let smiling = true;
let jumping = false;
let jumpY = 0;
let jumpVel = 0;
let blushAlpha = 100;

function setup() {
  createCanvas(600, 400);
  // saveGif 제거 (포트폴리오용)
}

function draw() {
  background(255, 245, 220);

  if (jumping) {
    jumpVel += 0.8;
    jumpY += jumpVel;
    if (jumpY >= 0) {
      jumpY = 0;
      jumping = false;
      jumpVel = 0;
    }
  }

  let d = dist(mouseX, mouseY, x, 200 + jumpY);
  if (d < 110) {
    blushAlpha = 180;
  } else {
    blushAlpha = 100;
  }

  if (blinking) {
    blinkTimer++;
    if (blinkTimer > 8) {
      blinking = false;
      blinkTimer = 0;
    }
  }

  if (keyIsDown(LEFT_ARROW)) x -= 3;
  if (keyIsDown(RIGHT_ARROW)) x += 3;
  x = constrain(x, 100, 500);

  drawCharacter(x, 200 + jumpY, blinking, smiling, blushAlpha);
}

function drawCharacter(cx, cy, isBlinking, isSmiling, ba) {
  push();
  translate(cx - 300, cy - 200);

  fill(85, 40, 50);
  noStroke();
  ellipse(300, 220, 280, 380);
  ellipse(180, 250, 120, 250);
  ellipse(420, 250, 120, 250);

  fill(255, 218, 180);
  rect(280, 300, 40, 40);

  fill(255, 230, 200);
  ellipse(300, 200, 200, 220);

  fill(85, 40, 50);
  arc(300, 120, 220, 140, PI, TWO_PI);
  rect(190, 120, 220, 50);
  rect(210, 115, 15, 60);
  rect(250, 110, 15, 65);
  rect(290, 115, 15, 60);
  rect(330, 110, 15, 65);
  rect(370, 115, 15, 60);

  fill(255, 210, 175);
  ellipse(200, 200, 35, 50);
  ellipse(400, 200, 35, 50);

  stroke(30, 30, 30);
  strokeWeight(7);
  noFill();
  ellipse(255, 190, 90, 90);
  ellipse(345, 190, 90, 90);
  strokeWeight(6);
  line(300, 190, 300, 185);
  strokeWeight(5);
  line(210, 185, 170, 180);
  line(390, 185, 430, 180);

  if (isBlinking) {
    fill(50, 35, 25);
    noStroke();
    ellipse(255, 195, 60, 8);
    ellipse(345, 195, 60, 8);
  } else {
    fill(255);
    noStroke();
    ellipse(255, 190, 60, 65);
    ellipse(345, 190, 60, 65);
    fill(50, 35, 25);
    ellipse(255, 195, 25, 30);
    ellipse(345, 195, 25, 30);
    fill(255);
    ellipse(260, 185, 12, 15);
    ellipse(350, 185, 12, 15);
    ellipse(248, 200, 6, 8);
    ellipse(338, 200, 6, 8);
  }

  noFill();
  stroke(60, 30, 35);
  strokeWeight(4);
  arc(255, 155, 60, 30, PI + 0.2, TWO_PI - 0.2);
  arc(345, 155, 60, 30, PI + 0.2, TWO_PI - 0.2);

  fill(240, 200, 170);
  noStroke();
  ellipse(300, 220, 20, 25);
  fill(200, 160, 140);
  ellipse(295, 230, 6, 8);
  ellipse(305, 230, 6, 8);

  if (isSmiling) {
    fill(220, 100, 120);
    arc(300, 250, 70, 50, 0, PI);
    fill(255);
    rect(275, 250, 15, 12);
    rect(292, 250, 16, 12);
    rect(310, 250, 15, 12);
  } else {
    fill(220, 100, 120);
    ellipse(300, 265, 45, 50);
    fill(80, 30, 30);
    ellipse(300, 268, 30, 35);
  }

  fill(255, 150, 150, ba);
  ellipse(220, 230, 50, 40);
  ellipse(380, 230, 50, 40);

  fill(120, 80, 70);
  ellipse(375, 215, 4, 4);

  fill(220, 60, 70);
  rect(240, 340, 120, 60, 15);
  fill(200, 50, 60);
  arc(300, 340, 45, 18, 0, PI);
  stroke(200, 50, 60);
  strokeWeight(1.5);
  line(250, 355, 350, 355);
  line(245, 365, 355, 365);
  line(245, 375, 355, 375);

  pop();
}

function mousePressed() {
  blinking = true;
  blinkTimer = 0;
}

function keyPressed() {
  if (key === ' ') {
    smiling = !smiling;
  }
  if (keyCode === UP_ARROW && !jumping) {
    jumping = true;
    jumpVel = -15;
  }
}
