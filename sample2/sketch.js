let isGlassesRemoved = false;
let x = 0;
let clothesColor = color(0);
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  
  translate(x, 0);
  if (keyIsPressed) {
    if (key === 'd' || key === 'D') {
      x += 4;
    }
    else if (key === 'a' || key === 'A') {
      x -= 4;
    }
  }
  // 귀
  noStroke();
  fill(250, 245, 220);
  ellipse(165, 260, 30, 50);
  ellipse(335, 260, 30, 50);
  fill(250, 224, 212);
  ellipse(165, 260, 20, 40);
  ellipse(335, 260, 20, 40);
  
  // 목
  fill(250, 220, 190);
  noStroke();
  quad(280, 340, 220, 340, 210, 420, 290, 420);
  
  // 얼굴
  noStroke();
  fill(250, 235, 210);
  ellipse(250, 250, 170, 240);
  
  // 눈
  noStroke();
  fill(55, 0, 0);
  ellipse(210, 245, 20, 20);
  ellipse(290, 245, 20, 20);
  fill(0);
  ellipse(210, 245, 10, 10);
  ellipse(290, 245, 10, 10);
  fill(255);
  ellipse(213, 243, 5, 5);
  ellipse(293, 243, 5, 5);
  
  // 코
  noStroke();
  fill(250, 220, 190);
  ellipse(244, 285, 25, 20);
  ellipse(250, 265, 27, 60);
  ellipse(256, 285, 25, 20);
  
  // 안경
  drawGlasses();
  
  // 입
  noStroke();
  fill(255, 90, 90);
  arc(250, 315, 60, 20, radians(0), radians(180));
  arc(238, 315, 35, 15, radians(180), radians(360));
  arc(263, 315, 35, 15, radians(180), radians(360));
  noFill();
  stroke("#A50000");
  strokeWeight(2);
  arc(250, 315, 60, 4, radians(0), radians(180));
  
  // 머리
  fill(0);
  arc(250, 220, 170, 170, radians(180), radians(360));
  stroke(0);
  strokeWeight(5);
  for (let i = 0; i < 33; i++) {
    line(170 + 5 * i, 223, 170 + 5 * i, 200);
  }
  strokeWeight(3);
  line(165, 220, 165, 250);
  line(167, 220, 167, 247);
  line(169, 220, 169, 254);
  line(171, 220, 171, 243);
  line(173, 220, 173, 230);
  
  line(327, 220, 327, 230);
  line(329, 220, 329, 247);
  line(331, 220, 331, 243);
  line(333, 220, 333, 252);
  line(335, 220, 335, 250);
  
  // 상체
  drawClothes();
}

function drawGlasses() {
  if (isGlassesRemoved) {
    if ((keyIsPressed) && (key === 'R' || key === 'r')) {
      drawOriginalGlasses();
      isGlassesRemoved = false;
    }
    else {
      return;
    }
  }
  
  if (isMouseOverGlasses()) {
    //안경 알과 연결 부분
    fill(255, 100);
    noStroke();
    ellipse(210, 250, 50, 50);
    ellipse(290, 250, 50, 50);
    noFill(255, 100);
    stroke(255, 100);
    arc(250, 255, 30, 30, radians(200), radians(340));
    
    stroke(255);
    strokeWeight(4);
    line(185, 250, 185, 240);
    line(235, 250, 235, 240);
    line(315, 250, 315, 240);
    line(265, 250, 265, 240);
    
    line(185, 240, 170, 235);
    line(315, 240, 330, 235);
  } 
  else {
    drawOriginalGlasses(); //안경 그리기
  }
}

function isMouseOverGlasses() {
  // 왼쪽과 오른쪽 렌즈 중심을 기준으로 렌즈 중심과 커서의 거리가 반지름(25) 이하이면 isMouseOverGlasses는 true 반환
  let d1 = dist(mouseX, mouseY, 210 + x, 250);
  let d2 = dist(mouseX, mouseY, 290 + x, 250);
  return (d1 < 25 || d2 < 25);
}

function mousePressed() {
  //커서가 안경 위에 있고 안경이 벗겨지지 않았으면 안경 제거
  if (!isGlassesRemoved && isMouseOverGlasses()) {
    isGlassesRemoved = true;
  }
  if (mouseX >= 105 && mouseY >= 410 && mouseX <= 395 && mouseY <= 500) {
    clothesColor = color(random(256), random(256), random(256));
  }
}

function drawOriginalGlasses() {
  // 안경 아래쪽
  stroke(255, 215, 0);
  noFill();
  strokeWeight(1);
  arc(210, 250, 50, 50, radians(0), radians(180));
  arc(290, 250, 50, 50, radians(0), radians(180));
    
  // 안경 연결 부분
  noFill();
  strokeWeight(3);
  stroke(255, 215, 0);
  arc(250, 255, 30, 30, radians(200), radians(340));
    
  // 안경 위쪽
  strokeWeight(4);
  stroke(0);
  arc(210, 250, 50, 50, radians(200), radians(340));
  arc(290, 250, 50, 50, radians(200), radians(340));
  
  // 안경 다리
  stroke(0);
  line(185, 240, 170, 235);
  line(315, 240, 330, 235);
}


function drawClothes() { //상체 그리기
  fill(clothesColor);
  noStroke();
  quad(110, 440, 190, 410, 190, 500, 110, 500);
  quad(390, 440, 310, 410, 310, 500, 390, 500);
  quad(190, 500, 190, 410, 310, 410, 310, 500);
  ellipse(115, 448.7, 20, 20);
  ellipse(385, 448.7, 20, 20);
  quad(110, 450, 105, 450, 105, 500, 110, 500);
  quad(390, 450, 395, 450, 395, 500, 390, 500);
  fill(250, 220, 190);
  arc(250, 410, 120, 20, radians(180), radians(360));
  arc(250, 410, 120, 50, radians(0), radians(180));
}