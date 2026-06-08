function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(255, 245, 220);

  // 뒷머리
  fill(85, 40, 50);
  noStroke();
  ellipse(300, 220, 280, 380);
  ellipse(180, 250, 120, 250);
  ellipse(420, 250, 120, 250);

  // 목
  fill(255, 218, 180);
  rect(280, 300, 40, 40);

  // 얼굴
  fill(255, 230, 200);
  ellipse(300, 200, 200, 220);

  // 앞머리
  fill(85, 40, 50);
  arc(300, 120, 220, 140, PI, TWO_PI);
  rect(190, 120, 220, 50);
  rect(210, 115, 15, 60);
  rect(250, 110, 15, 65);
  rect(290, 115, 15, 60);
  rect(330, 110, 15, 65);
  rect(370, 115, 15, 60);

  // 귀
  fill(255, 210, 175);
  ellipse(200, 200, 35, 50);
  ellipse(400, 200, 35, 50);

  // 안경테
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

  // 눈
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

  // 눈썹
  noFill();
  stroke(60, 30, 35);
  strokeWeight(4);
  arc(255, 155, 60, 30, PI + 0.2, TWO_PI - 0.2);
  arc(345, 155, 60, 30, PI + 0.2, TWO_PI - 0.2);

  // 코
  fill(240, 200, 170);
  noStroke();
  ellipse(300, 220, 20, 25);
  fill(200, 160, 140);
  ellipse(295, 230, 6, 8);
  ellipse(305, 230, 6, 8);

  // 입
  fill(220, 100, 120);
  arc(300, 250, 70, 50, 0, PI);
  fill(255);
  rect(275, 250, 15, 12);
  rect(292, 250, 16, 12);
  rect(310, 250, 15, 12);

  // 볼
  fill(255, 150, 150, 100);
  ellipse(220, 230, 50, 40);
  ellipse(380, 230, 50, 40);

  // 점
  fill(120, 80, 70);
  ellipse(375, 215, 4, 4);

  // 빨간 니트
  fill(220, 60, 70);
  rect(240, 340, 120, 60, 15);
  fill(200, 50, 60);
  arc(300, 340, 45, 18, 0, PI);
  stroke(200, 50, 60);
  strokeWeight(1.5);
  line(250, 355, 350, 355);
  line(245, 365, 355, 365);
  line(245, 375, 355, 375);
}
